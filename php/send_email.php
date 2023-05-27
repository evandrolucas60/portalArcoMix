<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Configure o remetente e o destinatário do e-mail
    $from = "evandrolucas60@yahoo.com"; // Substitua com o seu endereço de e-mail
    $to = "evandrolucas60@yahoo.com"; // Substitua com o endereço de e-mail do destinatário

    // Configure o cabeçalho do e-mail
    $headers = "From: $name <$email>" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "Content-Type: text/plain; charset=utf-8" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Envie o e-mail
    $sent = mail($to, $subject, $message, $headers);

    if ($sent) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar o e-mail.";
    }
}
?>
