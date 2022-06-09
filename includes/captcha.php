<?php

    if (isset($_POST['token'])) {
        $captcha = $_POST['token'];
    }

    $secretKey = '6Lc5H1ggAAAAAH4-rJV02ITfBrMN3ykd7DHvwMW1';
    $ip = $_SERVER['REMOTE_ADDR'];

    $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . $secretKey . '&response=' . $captcha;
    $response = file_get_contents($url);
    $responseKeys = json_decode($response, true);

    header('Content-type: application/json');

    if ($responseKeys['success'] && $responseKeys['score'] >= 0.5 ) {
        echo json_encode(['success' => 'true', 'om_score' => $responseKeys['score'], 'token' => $_POST['token']]);
    } else {
        echo json_encode(['success' => 'false', 'om_score' => $responseKeys['score'], 'token' => $_POST['token']]);
    }
