from fastapi import FastAPI, APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import bcrypt
import jwt
from html import escape
from pathlib import Path
from email_service import send_email
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional, Annotated, Any
from pydantic.functional_validators import BeforeValidator
from bson import ObjectId
import uuid
from datetime import datetime, timezone, timedelta


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Vetozone API")
api_router = APIRouter(prefix="/api")

JWT_ALGORITHM = "HS256"
security = HTTPBearer(auto_error=False)


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))


def create_access_token(email: str) -> str:
    payload = {
        "sub": email,
        "exp": datetime.now(timezone.utc) + timedelta(hours=12),
        "type": "access",
    }
    return jwt.encode(payload, os.environ["JWT_SECRET"], algorithm=JWT_ALGORITHM)


async def get_current_admin(
    creds: Optional[HTTPAuthorizationCredentials] = Depends(security),
) -> str:
    if creds is None:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(
            creds.credentials, os.environ["JWT_SECRET"], algorithms=[JWT_ALGORITHM]
        )
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
    email = payload.get("sub")
    user = await db.users.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return email


def _validate_object_id(v: Any) -> str:
    if isinstance(v, ObjectId):
        return str(v)
    return str(v)


PyObjectId = Annotated[str, BeforeValidator(_validate_object_id)]


# ---------- Models ----------
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=40)
    clinic: Optional[str] = Field(default="", max_length=160)
    request_type: str = Field(default="quote")  # quote | demo | info
    message: str = Field(..., min_length=5, max_length=2000)


class Contact(BaseModel):
    model_config = ConfigDict(populate_by_name=True, extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    clinic: str = ""
    request_type: str = "quote"
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    token: str
    email: str


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Vetozone API"}


@api_router.post("/auth/login", response_model=TokenResponse)
async def login(payload: LoginRequest):
    email = payload.email.lower()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(payload.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="E-posta veya şifre hatalı")
    token = create_access_token(email)
    return TokenResponse(token=token, email=email)


@api_router.get("/admin/contacts", response_model=List[Contact])
async def admin_list_contacts(_: str = Depends(get_current_admin)):
    docs = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Contact(**d) for d in docs]


TYPE_LABELS_TR = {"quote": "Fiyat Teklifi", "demo": "Demo Talebi", "info": "Bilgi"}


async def notify_new_contact(contact: "Contact") -> None:
    to = os.environ.get("NOTIFY_EMAIL")
    if not to:
        return
    label = TYPE_LABELS_TR.get(contact.request_type, contact.request_type)
    html = (
        '<table role="presentation" width="100%"><tr><td style="padding:24px;'
        'font-family:Arial,sans-serif;color:#111">'
        '<h2 style="margin:0 0 4px">Yeni Vetozone Talebi</h2>'
        f'<p style="margin:0 0 16px;color:#c8362f;font-weight:bold">{escape(label)}</p>'
        f'<p style="margin:4px 0"><strong>Ad Soyad:</strong> {escape(contact.name)}</p>'
        f'<p style="margin:4px 0"><strong>E-posta:</strong> {escape(contact.email)}</p>'
        f'<p style="margin:4px 0"><strong>Telefon:</strong> {escape(contact.phone)}</p>'
        f'<p style="margin:4px 0"><strong>Klinik:</strong> {escape(contact.clinic or "-")}</p>'
        f'<p style="margin:12px 0 4px"><strong>Mesaj:</strong></p>'
        f'<p style="margin:0;padding:12px;background:#f4f4f5;border-radius:4px">{escape(contact.message)}</p>'
        '<p style="font-size:12px;color:#888;margin-top:20px">Bu bildirim Vetozone web '
        'sitesi iletişim formundan otomatik gönderilmiştir.</p>'
        '</td></tr></table>'
    )
    try:
        await send_email(
            to=to,
            subject=f"Yeni Vetozone Talebi — {contact.name} ({label})",
            html=html,
            reply_to=contact.email,
        )
    except Exception as e:
        logger.error(f"Contact notification email failed: {e}")


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    doc = contact.model_dump()
    await db.contacts.insert_one(doc)
    await notify_new_contact(contact)
    return contact


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    docs = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return [Contact(**d) for d in docs]


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def seed_admin():
    await db.users.create_index("email", unique=True)
    admin_email = os.environ["ADMIN_EMAIL"].lower()
    admin_password = os.environ["ADMIN_PASSWORD"]
    existing = await db.users.find_one({"email": admin_email})
    if existing is None:
        await db.users.insert_one({
            "email": admin_email,
            "password_hash": hash_password(admin_password),
            "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logger.info("Admin user seeded")
    elif not verify_password(admin_password, existing["password_hash"]):
        await db.users.update_one(
            {"email": admin_email},
            {"$set": {"password_hash": hash_password(admin_password)}},
        )


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
