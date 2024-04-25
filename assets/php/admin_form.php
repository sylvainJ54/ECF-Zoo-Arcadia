<?php
// Inclure le fichier de configuration
require_once '../assets/php/db_connect.php';
require_once '../assets/php/login.php';

// Vérifier si l'utilisateur est connecté et s'il est administrateur
if (isLoggedIn() && isAdmin()) {
    echo '<a href="../assets/php/admin_form.php">Accéder au formulaire d\'administration</a>';
    // Afficher le formulaire d'administration ici
    echo '<h2>Formulaire d\'administration</h2>';
    
    // Vérifier si le formulaire a été soumis
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        // Récupérer les données du formulaire
        $email = $_GET['username'];
        $password = password_hash($_GET['password'], PASSWORD_DEFAULT);
        $name = $_GET['name'];
        $firstname = $_GET['firstname'];
        $role = $_GET['role'];

        // Insérer les données dans la base de données
        $sql = "INSERT INTO users (username, password, name, firstname, role_id) VALUES ('$email', '$password', '$name', '$firstname', $role)";
        // Exécuter la requête SQL
        if ($conn->query($sql) === TRUE) {
            echo "Le compte utilisateur a été créé avec succès.";
        } else {
            echo "Erreur lors de la création du compte utilisateur: " . $conn->error;
        }
    } else {
        // Afficher le formulaire d'inscription
        echo '<form action="" method="get">'; // Laisser l'action vide pour soumettre le formulaire à la même page
        echo '<label for="email">Email:</label>';
        echo '<input type="email" id="email" name="email" required><br>';
        echo '<label for="password">Mot de passe:</label>';
        echo '<input type="password" id="password" name="password" required><br>';
        echo '<label for="name">Nom:</label>';
        echo '<input type="text" id="name" name="name" required><br>';
        echo '<label for="firstname">Prénom:</label>';
        echo '<input type="text" id="firstname" name="firstname" required><br>';
        echo '<label for="role">Rôle:</label>';
        echo '<select id="role" name="role">';
        echo '<option value="1">Employé</option>';
        echo '<option value="2">Vétérinaire</option>';
        echo '</select><br>';
        echo '<input type="submit" value="Créer un compte">';
        echo '</form>';
    }
} else {
    // Rediriger l'utilisateur s'il n'est pas connecté en tant qu'administrateur
    header('Location: ../assets/php/login.php');
    exit;
}
?>


