<?php

$admin_email = "ilyaskel27@mail.ru";
$site_name   = "AdovDev";

// Вставить свой secret key:
$secret_key = "6LeP0vYrAAAAAL3YNhluJS27RNzkhUQzW5KzEKgb";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $token = $_POST['token'] ?? '';

    if (!$token) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Captcha token missing"]);
        exit;
    }

    // Проверка reCAPTCHA v3
    $recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
    $response = file_get_contents($recaptcha_url . "?secret=" . $secret_key . "&response=" . $token);
    $recaptcha_data = json_decode($response, true);

    if (!$recaptcha_data["success"] || $recaptcha_data["score"] < 0.5) {
        http_response_code(403);
        echo json_encode(["status" => "error", "message" => "reCAPTCHA verification failed"]);
        exit;
    }

    $firstName = trim($_POST["firstName"] ?? '');
    $lastName  = trim($_POST["lastName"] ?? '');
    $email     = trim($_POST["email"] ?? '');
    $phone     = trim($_POST["phone"] ?? '');
    $message   = trim($_POST["message"] ?? '');

    if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit;
    }

    $subject_admin = "Новая заявка с сайта $site_name";
    $message_admin = "
Имя: $firstName $lastName
Email: $email
Телефон: $phone

Сообщение:
$message
";

    $headers = "From: $site_name <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=utf-8\r\n";

    $mail_admin = mail($admin_email, $subject_admin, $message_admin, $headers);

    $subject_user = "Ваше сообщение на $site_name получено";
    $message_user = "
Здравствуйте, $firstName!

Мы получили вашу заявку и скоро свяжемся с вами.

С уважением, команда $site_name
";

    $headers_user = "From: $site_name <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n" .
                    "Content-Type: text/plain; charset=utf-8\r\n";

    $mail_user = mail($email, $subject_user, $message_user, $headers_user);

    if ($mail_admin && $mail_user) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
