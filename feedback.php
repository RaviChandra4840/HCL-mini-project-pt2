<?php
// Check if form data is received
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $category = $_POST["category"];
    $message = $_POST["message"];

    // Save feedback data to a file (you can modify this to save to a database)
    $file = fopen("feedback.txt", "a");
    fwrite($file, "Name: $name\n");
    fwrite($file, "Email: $email\n");
    fwrite($file, "Category: $category\n");
    fwrite($file, "Message: $message\n");
    fwrite($file, "-------------------------------------\n");
    fclose($file);

    // Send a response
    //http_response_code(200);
    header("Location: dashboard.html"); // Redirect to dashboard
    exit;
} else {
    // Send an error response if the request method is not POST
    //header("Location: dashboard.html"); 
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
