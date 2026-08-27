# Vetozone Landing Page — PRD

## Original Problem Statement
Build a landing page for Vetozone (veteriner medikal ozon jeneratörü). Use info from current vetozone.com.tr and detailed info from hasmedical.com/vetozone/. Build a new modern site.

## User Choices
- Language: Türkçe + English (language switcher)
- Contact form: Working form, messages saved to DB
- Design: Modern/premium new design (red-black device colors)
- Sections: Hero + Product + Features + Use cases (species) + Technical specs + Contact

## Architecture
- Frontend: React 19, Tailwind, framer-motion (reveals/parallax), lenis (smooth scroll), react-fast-marquee, @phosphor-icons/react
- Backend: FastAPI + MongoDB (motor). Contact submissions stored in `contacts` collection.
- i18n via React Context (`LanguageContext`), content in `src/data/content.js` (tr/en)

## Implemented (2026-08)
- Sticky glass navbar with TR/EN toggle + smooth anchor nav
- Kinetic dark hero: masked line-by-line reveal, product spotlight, scroll parallax, stats
- Manifesto marquee (outline stroke text)
- Manifesto numbered chapters (01–04): ÜTS/CE, quality, service, economical
- Features bento grid (dose 0.1–50µg/ml, 800mBar, TFT, stand, dual catalyst, 100% domestic)
- Use cases tabs (Dog&Cat / Horse / Cattle) with fading images + treatment methods
- Technical specs table (sticky device image)
- Veterinarian testimonials
- Working contact form (POST /api/contact) with sonner toasts
- Massive-typography footer with CE/ÜTS badges

## API
- POST /api/contact — create contact (name,email,phone,clinic,request_type,message)
- GET /api/contact — list contacts
- GET/POST /api/status — health/status

## Verified
- Backend curl POST/GET contact ✓
- UI form submit → success toast ✓
- Language toggle TR→EN ✓
- Full-page visual render across all sections ✓

## Backlog (P1/P2)
- Gallery/case-study section with real clinic photos
- Admin view for submitted contacts
- WhatsApp floating button
- SEO meta tags + OG image
- Client logos strip (referans klinikler)
