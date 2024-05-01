<?php
$host = 'localhost';
$db   = 'my_database';
$user = 'root';
$pass = '';

// Create a new PDO instance
$pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["Username"];  
    $user_id  = $_POST["User_id"];   
    $email    = $_POST["Email"];     
    $password = password_hash($_POST["Password"], PASSWORD_DEFAULT);  

    
    $stmt = $pdo->prepare("INSERT INTO users (username, user_id, email, password) VALUES (?, ?, ?, ?)");
    $stmt->execute([$username, $user_id, $email, $password]);

    echo "Registration successful!";
}
?>
