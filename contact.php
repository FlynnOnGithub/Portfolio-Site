<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once "vendor/autoload.php";
// Enable or disable exceptions via variable
$debug = true;
try {
    // Create instance of PHPMailer class
    $mail = new PHPMailer($debug);
     if ($debug) {
         // issue a detailed log
        $mail->SMTPDebug = SMTP::DEBUG_SERVER; 
    }
    // Authentication with SMTP
    $mail-> isSMTP();
    $mail->SMTPAuth = true;
    // Login
    $mail->Host = "smtp.ionos.co.uk";
    $mail->Port = 587;
    $mail->Username = "contact@flynnbate.com";
    $mail->Password = "iwasB0rnabeast!";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->setFrom('info@example.com', 'name');
    $mail->addAddress('info@example.com', 'name');
    $mail-> addAttachment("/home/user/Desktop/sampleimage.png", "sampleimage.png");
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->isHTML(true);
    $mail->Subject = 'The subject of your mail';
    $mail->Body = 'The mail text in HTML content. <b>bold</b> elements are allowed.';
    $mail->AltBody = 'The text as a simple text element';
    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: ".$e->getMessage();
}