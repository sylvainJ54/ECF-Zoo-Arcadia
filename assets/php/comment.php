<?php
// Inclure le fichier de connexion à la base de données
include '../assets/php/db_connect.php';

// Vérification si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Récupération des données du formulaire
    $pseudo = $_GET['pseudo'];
    $avis = $_GET['avis'];
    $comment_status = $_GET['comment_status']; // Normalement caché, mais récupéré pour une sécurité supplémentaire
    
    // Préparation et exécution de la requête SQL pour insérer les données dans la base de données
    $sql = "INSERT INTO avis (pseudo, commentaire, isVisible) VALUES ('$pseudo', '$avis', '$comment_status')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Avis soumis avec succès.";
    } else {
        echo "Erreur : " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>