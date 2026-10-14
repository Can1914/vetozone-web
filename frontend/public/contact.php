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
foreach ($configPaths as $path) {
    if (is_readable($path)) {
        $config = require $path;
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

require __DIR__ . '/lib/PHPMailer/Exception.php';
require __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require __DIR__ . '/lib/PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $config['host'];
    $mail->Port = (int) $config['port'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['username'];
    $mail->Password = $config['password'];
    $mail->SMTPSecure = ($config['secure'] ?? 'ssl') === 'tls'
        ? PHPMailer::ENCRYPTION_STARTTLS
        : PHPMailer::ENCRYPTION_SMTPS;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Timeout = 15;

    // Gönderen kendi alan adımız olmalı, yoksa SPF düşer ve posta spam'e gider.
    $mail->setFrom($config['from'], $config['from_name'] ?? 'Vetozone Web');
    $mail->addAddress($config['recipient']);
    // "Yanıtla" doğrudan formu dolduran kişiye gitsin.
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'Yeni Talep — ' . $name . ' (' . $typeLabel . ')';
    $mail->Body = $body;

    $mail->send();
} catch (MailException $e) {
    // Ayrıntı sunucu günlüğüne yazılır; istemciye sızdırılmaz.
    error_log('[vetozone] mail gönderilemedi: ' . $mail->ErrorInfo);
    respond(500, ['ok' => false, 'error' => 'send_failed']);
}

respond(200, ['ok' => true]);
