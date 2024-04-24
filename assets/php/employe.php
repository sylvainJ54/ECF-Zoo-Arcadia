
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interface Employé</title>
</head>
<body>
    <h1>Interface Employé - Gestion des Avis</h1>

    <!-- Affichage des avis soumis -->
    <h2>Avis en attente :</h2>
    <?php
    // Inclure le fichier de connexion à la base de données
    include 'db_connect.php';

    // Récupérer les avis en attente depuis la base de données
    $sql = "SELECT * FROM avis WHERE isVisible = 'pending'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Afficher chaque avis avec des options pour l'employé
        while($row = $result->fetch_assoc()) {
            echo "<div>";
            echo "<p>Pseudo : " . $row["pseudo"] . "</p>";
            echo "<p>Avis : " . $row["commentaire"] . "</p>";
            echo "<form action='process_avis.php' method='get'>";
            echo "<input type='hidden' name='avis_id' value='" . $row["avis_id"] . "'>";
            echo "<button type='submit' name='action' value='approve'>Approuver</button>";
            echo "<button type='submit' name='action' value='reject'>Rejeter</button>";
            echo "</form>";
            echo "</div>";
        }
    } else {
        echo "Aucun avis en attente.";
    }

    // Fermer la connexion à la base de données
    $conn->close();
    ?>

    <!-- Ajouter d'autres fonctionnalités et options pour l'employé -->

</body>
</html>

