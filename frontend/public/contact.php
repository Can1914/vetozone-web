<?php
declare(strict_types=1);

/**
 * Vetozone iletişim formu — PHPMailer ile SMTP üzerinden e-posta gönderir.
 * Arkasında veritabanı veya yönetim paneli yoktur; talepler yalnızca e-posta
 * olarak düşer. Alıcı adres config dosyasından gelir, istekle değiştirilemez.
 *
 * SMTP bilgileri için mail-config.example.php dosyasına bakın.
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception as MailException;

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Başlık satırlarına kaçış karakteri enjekte edilmesini engeller. */
function singleLine(string $value): string
{
    return trim(str_replace(["\r", "\n", "\0"], ' ', $value));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

// Web kökünün dışındaki konum tercih edilir; oradaki dosya tarayıcıdan
// hiçbir koşulda istenemez.
$configPaths = [
    __DIR__ . '/../vetozone-mail-config.php',
    __DIR__ . '/mail-config.php',
];

$config = null;
$configDir = __DIR__;
foreach ($configPaths as $path) {
    if (is_readable($path)) {
        $config = require $path;
        $configDir = dirname($path);
        break;
    }
}

if (!is_array($config)) {
    error_log('[vetozone] mail yapılandırması bulunamadı');
    respond(500, ['ok' => false, 'error' => 'not_configured']);
}

$MAX = [
    'name' => 120,
    'email' => 160,
    'phone' => 40,
    'clinic' => 160,
    'request_type' => 40,
    'message' => 2000,
];

$TYPE_LABELS = [
    'quote' => 'Fiyat Teklifi',
    'demo' => 'Demo Talebi',
    'info' => 'Bilgi',
    'teknik_destek' => 'Teknik Destek',
    'satis_danismanligi' => 'Satış Danışmanlığı',
    'egitim_talebi' => 'Eğitim Talebi',
    'bayilik_basvurusu' => 'Bayilik Başvurusu',
];

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    $data = $_POST;
}

// Bot tuzağı: gerçek kullanıcıya görünmeyen alan doldurulmuşsa sessizce başarı
// döneriz, böylece bot yeniden denemez ama posta kutusuna bir şey düşmez.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

$fields = [];
foreach ($MAX as $key => $limit) {
    $value = isset($data[$key]) && is_string($data[$key]) ? $data[$key] : '';
    $fields[$key] = mb_substr(trim($value), 0, $limit);
}

if ($fields['name'] === '' || $fields['email'] === '' || $fields['phone'] === '' || $fields['message'] === '') {
    respond(422, ['ok' => false, 'error' => 'missing_fields']);
}

$email = singleLine($fields['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'invalid_email']);
}

$name = singleLine($fields['name']);
$typeLabel = $TYPE_LABELS[$fields['request_type']] ?? singleLine($fields['request_type']);

$body = "Vetozone web sitesi iletişim formu\n"
    . str_repeat('-', 40) . "\n\n"
    . "Talep türü : " . $typeLabel . "\n"
    . "Ad Soyad   : " . $name . "\n"
    . "E-posta    : " . $email . "\n"
    . "Telefon    : " . singleLine($fields['phone']) . "\n"
    . "Klinik     : " . (singleLine($fields['clinic']) ?: '-') . "\n\n"
    . "Mesaj:\n" . $fields['message'] . "\n\n"
    . str_repeat('-', 40) . "\n"
    . "Gönderim: " . date('d.m.Y H:i') . "\n"
    . "IP      : " . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\n";

require __DIR__ . '/phpmailer/Exception.php';
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';

$port = (int) $config['port'];

// 465 TLS ile başlar, 587 ise düz başlayıp STARTTLS ile yükseltir. İkisinin
// karıştırılması "STARTTLS command failed" hatasının olağan sebebi; bu yüzden
// portun kendi yöntemi önce denenir, diğeri yedekte durur.
$modes = $port === 465 ? ['ssl', 'tls'] : ['tls', 'ssl'];
if (!empty($config['secure'])) {
    array_unshift($modes, strtolower((string) $config['secure']));
    $modes = array_values(array_unique($modes));
}

/** Taşıma yöntemi dışındaki her şey ortak; onu çağıran belirler. */
$compose = function (PHPMailer $mail) use ($config, $email, $name, $typeLabel, $body): void {
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    // Gönderen kendi alan adımız olmalı, yoksa SPF düşer ve posta spam'e gider.
    $mail->setFrom($config['from'], $config['from_name'] ?? 'Vetozone Web');
    // Zarf göndericisi de aynı adres olsun; SPF buna bakar.
    $mail->Sender = $config['from'];
    $mail->addAddress($config['recipient']);
    // "Yanıtla" doğrudan formu dolduran kişiye gitsin.
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'Yeni Talep — ' . $name . ' (' . $typeLabel . ')';
    $mail->Body = $body;
};

// Denenecek taşıma yolları, sırayla. İlk başaran kazanır; hangisi olduğu
// log'a yazılır. Yapılandırılmış SMTP hesabı en başta, çünkü postayı asıl
// oraya teslim etmek istiyoruz.
$transports = [];

foreach ($modes as $mode) {
    $transports['smtp/' . $mode] = function (PHPMailer $mail) use ($config, $port, $mode): void {
        $mail->isSMTP();
        $mail->Host = $config['host'];
        $mail->Port = $port;
        $mail->SMTPAuth = true;
        $mail->Username = $config['username'];
        $mail->Password = $config['password'];
        $mail->SMTPSecure = $mode === 'tls'
            ? PHPMailer::ENCRYPTION_STARTTLS
            : PHPMailer::ENCRYPTION_SMTPS;
        $mail->Timeout = 10;
    };
}

// 587'nin "TLS support is not enabled" demesi, dışarıya çıkmak yerine
// sunucunun kendi postacısına yönlendirildiğimizi gösteriyor. Plesk'te o
// postacı 25. portta dinler ve localhost'tan geleni kimlik doğrulaması
// istemeden kabul eder.
$transports['smtp/yerel'] = function (PHPMailer $mail): void {
    $mail->isSMTP();
    $mail->Host = '127.0.0.1';
    $mail->Port = 25;
    $mail->SMTPAuth = false;
    $mail->SMTPAutoTLS = false;
    $mail->SMTPSecure = '';
    $mail->Timeout = 5;
};

// Sunucunun kendi mail() fonksiyonu — alan adının SPF kaydı bu sunucunun
// IP'sini yetkilendirdiği için buradan çıkan posta da geçerli kalır.
$transports['mail()'] = function (PHPMailer $mail): void {
    $mail->isMail();
};

// Bazı paylaşımlı sunucular mail()'e zarf göndericisini -f ile geçirmeye
// izin vermez; o parametre reddedilince mail() hiç çağrılmadan false döner.
// Sender boş kalırsa PHPMailer -f eklemez.
$transports['mail()/zarfsiz'] = function (PHPMailer $mail): void {
    $mail->isMail();
    $mail->Sender = '';
};

$sent = false;
$method = null;
$errors = [];

foreach ($transports as $label => $configure) {
    $mail = new PHPMailer(true);
    try {
        $compose($mail);
        // Taşıma ayarı en sonda: zarf göndericisini de değiştirebilmeli.
        $configure($mail);

        $mail->send();
        $sent = true;
        $method = $label;
        break;
    } catch (MailException $e) {
        $errors[] = $label . ' → ' . ($mail->ErrorInfo ?: $e->getMessage());
    }
}

// PHP'nin kendi günlüğünün yeri panelden panele değiştiği için config
// dosyasının yanına da yazıyoruz. Satırlar şifre içermez.
$log = function (string $line) use ($configDir): void {
    @file_put_contents(
        $configDir . '/vetozone-mail.log',
        date('d.m.Y H:i') . ' — ' . $line . "\n",
        FILE_APPEND
    );
};

if (!$sent) {
    // Ayrıntı yalnızca sunucu tarafında kalır; istemciye sızdırılmaz.
    $detail = implode('  ||  ', $errors);
    error_log('[vetozone] mail gönderilemedi: ' . $detail);
    $log('BASARISIZ — ' . $detail);
    respond(500, ['ok' => false, 'error' => 'send_failed']);
}

// Hangi yolun işe yaradığı kayda geçsin: SMTP düşüp mail() devreye girdiyse
// bu, SMTP'nin hâlâ kapalı olduğunu gösterir.
$log('gonderildi: ' . $method . ($errors ? '  (once basarisiz: ' . implode(' | ', $errors) . ')' : ''));

respond(200, ['ok' => true]);
