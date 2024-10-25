<?php

$recaptcha_secret = "6Ld_0WsqAAAAAOdfqzsjM3y0UB_5E-oZEjrtu_XL";
$recaptcha_response = $_POST["g-recaptcha-response"];

$url = "https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response";
$response = file_get_contents($url);
$response_data = json_decode($response, true);


if(!$response_data["succes"]){
    echo("recapcha validation failed");
} else {
    $name = $_POST["name"]; 
    $from = $_POST["email"]; 
    $subject = "Wiadomość z formularza na salonbeata.eu";
    $to = "beatasalonmonki@gmail.com"; 
    $message = $_POST["msg"]; 
    
    $secret = 'your secret key';
    
    $txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    
    $mail_status = mail($to, $subject, $txt, $headers);
    
    if ($mail_status) {
        header("Location: /index.html?mail_status=sent");
    } else {
        header("Location: /index.html?mail_status=error");
    }

}


