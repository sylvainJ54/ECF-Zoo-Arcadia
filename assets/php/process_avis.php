<?php
// Inclure le fichier de connexion à la base de données
include 'db_connect.php';

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Vérifier si une action a été spécifiée
    if(isset($_GET['action']) && isset($_GET['avis_id'])) {
        $action = $_GET['action'];
        $avis_id = $_GET['avis_id'];

        // Mettre à jour la base de données en fonction de l'action
        if($action == 'approve') {
            // Approbation de l'avis
            $sql = "UPDATE avis SET isVisible = 1 WHERE avis_id = $avis_id";
            if ($conn->query($sql) === TRUE) {
                echo "Avis approuvé avec succès.";
            } else {
                echo "Erreur lors de l'approbation de l'avis : " . $conn->error;
            }
        } elseif($action == 'reject') {
            // Rejet de l'avis
            $sql = "DELETE FROM avis WHERE avis_id = $avis_id";
            if ($conn->query($sql) === TRUE) {
                echo "Avis rejeté avec succès.";
            } else {
                echo "Erreur lors du rejet de l'avis : " . $conn->error;
            }
        } else {
            echo "Action non reconnue.";
        }
    } else {
        echo "Données insuffisantes pour traiter l'action.";
    }
} else {
    echo "Accès non autorisé.";
}

// Fermer la connexion à la base de données
$conn->close();
?>
