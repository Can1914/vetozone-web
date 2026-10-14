<?php
declare(strict_types=1);

/**
 * Vetozone iletişim formu — paylaşımlı hosting'in PHP'si ile e-posta gönderir.
 * Arkasında veritabanı veya yönetim paneli yoktur; talepler yalnızca e-posta
 * olarak düşer. Alıcı adres sabittir, dışarıdan değiştirilemez.
 */

header('Content-Type: application/json; charset=utf-8');

$RECIPIENT = 'info@vetozone.com.tr';
// SPF'nin geçmesi için gönderen kendi alan adımız olmalı; ziyaretçinin
// adresi Reply-To'ya konur, böylece "Yanıtla" doğrudan ona gider.
$SENDER = 'info@vetozone.com.tr';

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

$typeLabel = $TYPE_LABELS[$fields['request_type']] ?? $fields['request_type'];
$name = singleLine($fields['name']);

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

$subject = '=?UTF-8?B?' . base64_encode('Yeni Talep — ' . $name . ' (' . $typeLabel . ')') . '?=';

$headers = implode("\r\n", [
    'From: Vetozone Web <' . $SENDER . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = @mail($RECIPIENT, $subject, $body, $headers, '-f' . $SENDER);

if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'send_failed']);
}

respond(200, ['ok' => true]);
