<?php
$host = 'localhost';
$db   = 'my_database';
$user = 'my_user';
$pass = 'my_password';

// Create a new PDO instance
$pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST["user_id"];
    $password = $_POST["password"];

    // Fetch the user with the given user_id
    $stmt = $pdo->prepare("SELECT * FROM users WHERE user_id = ?");
    $stmt->execute([$user_id]);

    if ($user = $stmt->fetch()) {
        // Verify password
        if (password_verify($password, $user["password"])) {
            // Password is correct
            header("Location: dashboard.html"); // Redirect to dashboard
            exit;
        } else {
            // Password is incorrect
            echo "Incorrect password!";
        }
    } else {
        // User not found
        echo "User not found!";
    }
}
?>
