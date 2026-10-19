#!/usr/bin/env python3
"""Marka logosunun web sürümlerini üretir.

Logo bize mavi mürekkep + opak beyaz zemin olarak geliyor. Beyazı doğrudan
silmek kenarlardaki yumuşatmayı bozup hale bırakır; onun yerine pikselin
parlaklığı saydamlığa çevriliyor: beyaz tamamen saydam, marka mavisi tamamen
opak oluyor. Aynı maskeden iki dosya çıkıyor — açık zeminler için mavi,
koyu zeminler (navbar, footer) için beyaz.

Kullanım:  python3 scripts/build-logos.py <kaynak.png>
"""
import sys
from pathlib import Path

from PIL import Image

BRAND = (0x2A, 0x6A, 0xA6)
OUT_DIR = Path(__file__).resolve().parent.parent / "frontend" / "public"


def luminance(r, g, b):
    return 0.299 * r + 0.587 * g + 0.114 * b


def build(source: Path) -> None:
    im = Image.open(source).convert("RGB")
    w, h = im.size
    px = im.load()

    brand_l = luminance(*BRAND)
    alpha = Image.new("L", (w, h))
    ap = alpha.load()
    for y in range(h):
        for x in range(w):
            l = luminance(*px[x, y])
            ap[x, y] = max(0, min(255, round((255 - l) / (255 - brand_l) * 255)))

    # Çevresindeki boş payı at, yoksa sayfada logo olduğundan küçük görünür.
    alpha = alpha.crop(alpha.getbbox())

    for name, rgb in (("vetozone-logo.png", BRAND), ("vetozone-logo-white.png", (255, 255, 255))):
        img = Image.new("RGBA", alpha.size, (*rgb, 0))
        img.putalpha(alpha)
        img.save(OUT_DIR / name, optimize=True)
        print(f"{name}  {img.size[0]}x{img.size[1]}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    build(Path(sys.argv[1]))
