<?php
$host = 'localhost';
$db   = 'details_database';
$user = 'db_user';
$pass = 'db_password';


$pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username     = $_POST["username"];
    $adharnumber  = $_POST["adharnumber"];
    $name         = $_POST["name"];
    $gender       = $_POST["gender"];
    $country      = $_POST["country"];
    $address      = $_POST["address"];
    $phone        = $_POST["phone"];
    $email        = $_POST["email"];


    $stmt = $pdo->prepare("INSERT INTO user_details (username, adharnumber, name, gender, country, address, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$username, $adharnumber, $name, $gender, $country, $address, $phone, $email]);

    echo "Details saved successfully!";
}
?>
