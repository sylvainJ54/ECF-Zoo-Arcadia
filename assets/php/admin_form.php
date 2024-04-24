<?php
// Inclure le fichier de configuration
require_once '../assets/config/config.php';

// Vérifier si l'utilisateur est connecté et s'il est administrateur
if (isLoggedIn() && isAdmin()) {
    echo '<a href="../assets/php/admin_form.php">Accéder au formulaire d\'administration</a>';
    // Afficher le formulaire d'administration ici
    echo '<h2>Formulaire d\'administration</h2>';
    echo '<form action="process_admin_form.php" method="get">';
    echo '<label for="email">Email:</label>';
    echo '<input type="email" id="email" name="email" required><br>';
    echo '<label for="password">Mot de passe:</label>';
    echo '<input type="password" id="password" name="password" required><br>';
    echo '<label for="role">Rôle:</label>';
    echo '<select id="role" name="role">';
    echo '<option value="employé">Employé</option>';
    echo '<option value="vétérinaire">Vétérinaire</option>';
    echo '</select><br>';
    echo '<input type="submit" value="Créer un compte">';
    echo '</form>';
} else {
    // Rediriger l'utilisateur s'il n'est pas connecté en tant qu'administrateur
    header('Location: ../assets/script/login.php');
    exit;
}
?>


