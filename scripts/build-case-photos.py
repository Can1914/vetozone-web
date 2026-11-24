#!/usr/bin/env python3
"""İyileşen Hastalar sayfasının fotoğraflarını broşürden üretir.

Broşürdeki karelerin bir kısmı Instagram ekran görüntüsünden kırpılmıştır;
PDF'e gömülü ham görseller telefon arayüzünü de içerdiği için doğrudan
kullanılamaz. Bu yüzden sayfalar 400 DPI basılır ve tasarımcının yerleştirdiği
kareler sayfadan kesilir. Kareler otomatik tespit edilmiştir (geniş, dolu
piksel blokları); aşağıdaki koordinatlar o tespitin sonucudur.

Kullanım:
    python3 scripts/build-case-photos.py /yol/Vetozone-2024-gold.pdf

Gereken: poppler (pdftoppm), Pillow, numpy.
"""
import os
import subprocess
import sys
import tempfile

import numpy as np
from PIL import Image

OUT = os.path.join(os.path.dirname(__file__), "..", "frontend", "public", "vakalar")

# (sayfa, üst, alt, [(sol, sağ), ...]) — 400 DPI basımdaki piksel koordinatları.
TILES = {
    4: [(373, 1215, [(113, 955), (1001, 1843), (1894, 2735)]),
        (2011, 2834, [(114, 936), (1013, 1835), (1912, 2735)]),
        (3263, 4113, [(91, 940), (982, 1832), (1880, 2729)])],
    5: [(373, 1484, [(162, 995), (1044, 1877), (1934, 2768)]),
        (1527, 2407, [(162, 1335), (1391, 2051), (2107, 2768)]),
        (3090, 3718, [(165, 792), (822, 1448), (1478, 2105), (2141, 2767)])],
    # 6. sayfanın ilk karesi 2x2 bir kolaj; otomatik tespit onu ikiye bölüyordu.
    6: [(432, 1662, [(122, 1762), (1816, 2747)]),
        (2762, 3566, [(131, 934), (1016, 1820), (1873, 2676)])],
}

NAMES = {
    "p4r1c1": "herkul-1", "p4r1c2": "herkul-2", "p4r1c3": "herkul-3",
    "p4r2c1": "yara-1", "p4r2c2": "yara-2", "p4r2c3": "yara-3",
    "p4r3c1": "luna-1", "p4r3c2": "luna-2", "p4r3c3": "luna-3",
    "p5r1c1": "tumor-1", "p5r1c2": "tumor-2", "p5r1c3": "tumor-3",
    "p5r2c1": "tumor-4", "p5r2c2": "tumor-5", "p5r2c3": "tumor-6",
    "p5r3c1": "arex-1", "p5r3c2": "arex-2", "p5r3c3": "arex-3", "p5r3c4": "arex-4",
    "p6r1c1": "efe-1", "p6r1c2": "efe-2",
    "p6r2c1": "neko-1", "p6r2c2": "neko-2", "p6r2c3": "neko-3",
}


def strip_triangle(arr):
    """Broşürün sol kenara koyduğu mavi 'oynat' üçgeninin bittiği sütun."""
    width = arr.shape[1]
    left = arr[:, : max(1, int(width * 0.12))]
    r, g, b = (left[:, :, i].astype(int) for i in range(3))
    blue = (b > 150) & (b - r > 60) & (g > 100) & (g < 230)
    hit = blue.any(axis=0)
    return int(np.max(np.nonzero(hit)) + 1) if hit.any() else 0


def trim_white(arr, tol=246):
    """Karenin çevresindeki beyaz boşluğu at (ör. radyografi karesi)."""
    height, width = arr.shape[:2]
    filled = arr.min(axis=2) < tol
    rows, cols = filled.any(axis=1), filled.any(axis=0)
    if not rows.any() or not cols.any():
        return (0, 0, width, height)
    return (int(np.argmax(cols)), int(np.argmax(rows)),
            int(width - np.argmax(cols[::-1])), int(height - np.argmax(rows[::-1])))


def main(pdf):
    os.makedirs(OUT, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(["pdftoppm", "-png", "-r", "400", "-f", "4", "-l", "6",
                        pdf, os.path.join(tmp, "p")], check=True)
        for page, rows in TILES.items():
            sheet = Image.open(os.path.join(tmp, f"p-{page}.png")).convert("RGB")
            for ri, (top, bottom, cols) in enumerate(rows, 1):
                for ci, (left, right) in enumerate(cols, 1):
                    tile = sheet.crop((left, top, right, bottom))
                    cut = strip_triangle(np.asarray(tile))
                    if cut:
                        tile = tile.crop((cut, 0, tile.width, tile.height))
                    tile = tile.crop(trim_white(np.asarray(tile)))
                    tile.thumbnail((1000, 1000), Image.LANCZOS)
                    name = NAMES[f"p{page}r{ri}c{ci}"]
                    path = os.path.join(OUT, f"{name}.jpg")
                    tile.save(path, "JPEG", quality=82, optimize=True, progressive=True)
                    print(f"{name}.jpg  {tile.width}x{tile.height}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
