<?php
// Connexion à la base de données MySQL
$servername = "localhost";  // Adresse du serveur MySQL
$username = "jose";  // Nom d'utilisateur MySQL
$password = "joseArcadia";  // Mot de passe MySQL
$dbname = "arcadia";  // Nom de la base de données MySQL

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("La connexion a échoué : " . $conn->connect_error);
}

