<?php

require_once 'db_connect.php';

$conn = connectToDatabase(); // Établir la connexion

// Assuming you have a form with 'username' and 'password' fields
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connect to the database
    $conn = db_connect();

    // Prepare the SQL statement
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");

    // Bind the username parameter
    $stmt->bind_param("s", $username);

    // Execute the query
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Check if the user exists
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $storedPassword = $row['password'];

        // Verify the password
        if (password_verify($password, $storedPassword)) {
            // Password is correct, login successful
            // Redirect to the desired page
            header("Location: /path/to/desired/page.php");
            exit();
        } else {
            // Password is incorrect
            echo "Invalid password";
        }
    } else {
        // User does not exist
        echo "User not found";
    }

    // Close the statement and the connection
    $stmt->close();
    $conn->close();
};
?>