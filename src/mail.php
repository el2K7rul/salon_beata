<?php
$name = $_POST["name"];
$from = $_POST["email"];
$subject = $_POST["Wiadomośc z formularza na stronie Salon Beata.pl"];
$to = "elkarul@op.pl";
$message = $_POST["msg"];
$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treśc: " . $message;
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status){
    header("Location: /index.html?mail_statys=sent");
} else {
    header("Location: /index.html?mail_statys=error");
}


?>