#!/usr/bin/env python3
"""Favicon setini logonun kendi 'v' harfinden üretir.

Kelime markası sekme ikonunda okunmuyor; tek harfe indirmek gerekiyor. Harf
çizilmiyor, logodan kesiliyor — böylece ikon ile logo aynı geometriyi
paylaşıyor. Zemin marka mavisi, harf beyaz: en küçük boyutta bile kontrast
yüksek kalıyor (alternatifler denendi, beyaz zeminli olan 16 pikselde
kayboluyor, altı çizgili olan bulanıklaşıyor).

Kullanım:  python3 scripts/build-favicon.py <kaynak-logo.png>
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

BRAND = (0x2A, 0x6A, 0xA6)
INK = (255, 255, 255)
OUT_DIR = Path(__file__).resolve().parent.parent / "frontend" / "public"

# Logodaki ilk harfin kutusu (satır bandı + sütun segmenti analizinden).
V_BOX = (97, 50, 201, 205)
BRAND_LUMA = 0.299 * BRAND[0] + 0.587 * BRAND[1] + 0.114 * BRAND[2]


def v_mask(source: Path) -> Image.Image:
    """Logodaki 'v' harfini saydamlık maskesi olarak döndürür."""
    im = Image.open(source).convert("L")
    mask = im.point(lambda p: max(0, min(255, round((255 - p) / (255 - BRAND_LUMA) * 255))))
    v = mask.crop(V_BOX)
    return v.crop(v.getbbox())


def icon(mask: Image.Image, size: int, rounded: bool = True) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    radius = int(size * 0.19) if rounded else 0
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=BRAND + (255,))

    height = size * 0.64
    width = height * mask.size[0] / mask.size[1]
    glyph = mask.resize((max(1, round(width)), max(1, round(height))), Image.LANCZOS)
    # Küçük boyutlarda ince çizgi griye dönüp kayboluyor; bir piksellik
    # kalınlaştırma harfi ayakta tutuyor.
    if size <= 32:
        glyph = glyph.filter(ImageFilter.MaxFilter(3))

    layer = Image.new("RGBA", (size, size), INK + (0,))
    alpha = Image.new("L", (size, size), 0)
    alpha.paste(glyph, (round((size - width) / 2), round((size - height) / 2)))
    layer.putalpha(alpha)
    return Image.alpha_composite(canvas, layer)


def build(source: Path) -> None:
    mask = v_mask(source)

    for size in (512, 192, 96, 32, 16):
        icon(mask, size).save(OUT_DIR / f"favicon-{size}.png", optimize=True)

    # iOS köşeleri kendi yuvarlıyor ve saydam köşeyi siyah gösteriyor, bu
    # yüzden dokunma ikonu köşesiz ve tamamen opak.
    icon(mask, 180, rounded=False).convert("RGB").save(
        OUT_DIR / "apple-touch-icon.png", optimize=True
    )

    # Eski tarayıcılar ve "sık kullanılanlar" için tek dosyada üç boyut.
    icon(mask, 48).save(
        OUT_DIR / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print("favicon-{512,192,96,32,16}.png, apple-touch-icon.png, favicon.ico")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    build(Path(sys.argv[1]))
