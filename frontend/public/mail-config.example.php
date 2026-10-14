<?php
/**
 * SMTP ayarları — ŞABLON.
 *
 * Bu dosyayı `mail-config.php` adıyla kopyalayıp kendi bilgilerinizi girin.
 *
 * TERCİH EDİLEN KONUM: web kök dizininin BİR ÜSTÜ, yani httpdocs/ (veya
 * public_html/) ile aynı seviyede, adı `vetozone-mail-config.php` olacak
 * şekilde. Orada durursa tarayıcıdan hiçbir şekilde istenemez.
 *
 *   /home/kullanici/
 *     ├── vetozone-mail-config.php   ← buraya
 *     └── httpdocs/
 *         ├── index.html
 *         └── contact.php
 *
 * Bu mümkün değilse `mail-config.php` adıyla contact.php'nin yanına koyun;
 * .htaccess bu isimdeki dosyaya dışarıdan erişimi engelliyor.
 *
 * Şifre içerdiği için gerçek dosyayı sürüm kontrolüne EKLEMEYİN.
 */

return [
    // Hosting panelinizdeki giden posta (SMTP) sunucusu
    'host' => 'mail.vetozone.com.tr',

    // 465 → SSL, 587 → STARTTLS. Natro genelde 465 kullanır.
    'port' => 465,
    'secure' => 'ssl', // 'ssl' veya 'tls'

    // Gönderim yapılacak posta kutusunun tam adresi ve şifresi
    'username' => 'info@vetozone.com.tr',
    'password' => 'BURAYA_POSTA_KUTUSU_SIFRESI',

    // Formun düştüğü adres
    'recipient' => 'info@vetozone.com.tr',

    // Gönderen olarak görünecek adres — SPF'nin geçmesi için kendi
    // alan adınızda ve yukarıdaki kutuyla aynı olmalı.
    'from' => 'info@vetozone.com.tr',
    'from_name' => 'Vetozone Web',
];
