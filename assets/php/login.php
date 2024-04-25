<?php
include '../assets/config/config.php';

// Récupération des données du formulaire
$username = $_GET['username'];
$password = $_GET['password'];

// Requête pour vérifier les identifiants
$sql = "SELECT users.username, users.name, users.firstname, roles.label AS role 
        FROM users 
        INNER JOIN roles ON users.role_id = roles.role_id 
        WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Utilisateur trouvé, retourne les informations de l'utilisateur
    $row = $result->fetch_assoc();
    echo json_encode(['success' => true, 'user' => $row]);
} else {
    // Identifiants invalides
    echo json_encode(['success' => false, 'message' => 'Identifiants invalides']);
}
