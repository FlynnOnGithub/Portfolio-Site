<?php

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Collect form data
$name = htmlspecialchars(strip_tags(trim($_POST['name'])));
$email = htmlspecialchars(strip_tags(trim($_POST['email'])));
$message = htmlspecialchars(strip_tags(trim($_POST['message'])));

if (empty($name) || empty($email) || empty($message)) {
    echo "Please fill out all fields.";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address.";
    exit;
}

if ($name === "RobertZes") {
    exit;
}

// Send email using PHPMailer
$mail = new PHPMailer(true);
try {
    //Server settings
$mail->Host = 'smtp.office365.com'; // Outlook SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'contact@flynnbate.com'; // Your Outlook email address
$mail->Password = 'J0shuapaul!'; // Your email password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

    //Recipients
    $mail->setFrom('contact@flynnbate.com', 'Flynn');
    $mail->addAddress('itsmeflynn2017@gmail.com', 'Flynn'); // Add recipient

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Message';
    $mail->Body    = "Name: $name<br>Email: $email<br>Message: $message";

    $mail->send();
    echo 'Message sent successfully!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>