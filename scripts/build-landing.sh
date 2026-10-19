#!/bin/sh
# Ana domaine (vetozone.com.tr) yüklenen "çok yakında" paketini hazırlar.
#
# FTP yüklemesi sunucuyu bu klasörün aynısına eşitler: burada olmayan dosya
# sunucudan silinir. Bu yüzden korunması gereken her şey buraya kopyalanır.
set -eu

cd "$(dirname "$0")/.."
out=landing-dist

rm -rf "$out"
mkdir -p "$out"

cp landing/index.html "$out/"
# Logo sitenin kendi varliklariyla ayni yerden gelir; iki kopya ayrismasin.
cp frontend/public/vetozone-logo.png frontend/public/favicon.png frontend/public/og-image.jpg "$out/"

# .htaccess olmadan sayfa yine açılır, ama config ve log dosyalarını dışarıya
# kapatan kurallar ile her adresi index.html'e yönlendiren kural kaybolurdu;
# ikincisi sayesinde /tedavi-alanlari gibi eski bağlantılar 404 yerine bu
# sayfayı gösteriyor.
cp frontend/public/.htaccess "$out/.htaccess"

# İletişim formu holding sayfasında kullanılmıyor. Yine de duruyor: kurulumu
# çalışır hâlde bırakmak, site geri döndüğünde yeniden kurmaktan ucuz.
cp frontend/public/contact.php "$out/"
cp -R frontend/public/phpmailer "$out/phpmailer"

# Paylaşımlı hosting 600 yetkili dosyayı okuyamıyor (daha önce görseller bu
# yüzden 404 vermişti).
find "$out" -type d -exec chmod 755 {} +
find "$out" -type f -exec chmod 644 {} +

echo "$out hazir:"
find "$out" -type f | sort
