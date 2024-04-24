// Sélection des éléments du formulaire
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

// Écouteur d'événement pour la soumission du formulaire
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêcher la soumission du formulaire

    // Validation simple des champs
    if (username.value === '' || password.value === '') {
        alert('Le nom d\'utilisateur et le mot de passe sont obligatoires.');
        return;
    }

    // Préparation des données au format JSON
    const data = {
        username: username.value,
        password: password.value
    };
    
    const jsonData = JSON.stringify(data);

    // Requête AJAX vers le fichier de connexion
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../assets/php/login.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Connexion réussie
            const modal = document.querySelector('.modal');
            modal.classList.remove('visible');
            const responseData = JSON.parse(xhr.responseText);
            if (responseData.isAdmin) {
                // Rediriger l'utilisateur vers la page d'administration
                window.location.href = '../assets/php/admin_form.php';
            } else {
                // Échec de la connexion
                console.error('Erreur de connexion !');
                alert('Erreur de connexion ! Veuillez réessayer.');
            }
        }
    };
    xhr.onerror = function () {
        console.error('Une erreur réseau est survenue.');
        alert('Une erreur réseau est survenue. Veuillez réessayer.');
    };
    xhr.send(jsonData);
});
