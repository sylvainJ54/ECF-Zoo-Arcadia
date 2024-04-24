<?php
// Inclusion du fichier de connexion à la base de données
require_once 'db_connection.php';

// Vérification de la méthode de requête
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupération des données du formulaire
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Requête préparée pour vérifier les identifiants de l'utilisateur
    $sql = "SELECT * FROM utilisateur WHERE username=? AND password=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // Utilisateur trouvé, retourner un message de succès
        echo "Login réussi";
    } else {
        // Aucun utilisateur trouvé, retourner un message d'erreur
        echo "Identifiants incorrects";
    }
} else {
    // Si la méthode de requête n'est pas POST, retourner un message d'erreur
    echo "Méthode de requête non autorisée";
}

// Fermeture de la connexion à la base de données
$stmt->close();
$conn->close();
?>
