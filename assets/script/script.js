 // modification des services si administrateur
const isAdmin = false; // Remplacez ceci par la logique réelle d'authentification

document.addEventListener('DOMContentLoaded', function () {
    const connexionBtn = document.getElementById('connexionBtn');
    const loginForm = document.getElementById('loginForm');
    const connexionModal = new bootstrap.Modal(document.getElementById('connexionModal'));
  
    // Associe la fonction d'ouverture du formulaire à l'événement clic sur le bouton Connexion
    connexionBtn.addEventListener('click', function () {
      connexionModal.show();
    });
  
    // Associe la fonction de traitement de la soumission du formulaire
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Récupère les valeurs du formulaire
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Ici, tu devras implémenter la vérification côté serveur
      // Vérifie les informations d'identification côté serveur et renvoie une réponse
      // En cas de succès, tu peux rediriger l'utilisateur vers une page spécifique
      // En cas d'échec, affiche un message d'erreur
      // Exemple simplifié :
      if (checkCredentials(username, password)) {
        alert('Connexion réussie!');
        connexionModal.hide();
      } else {
        alert('Échec de la connexion. Vérifiez vos informations d\'identification.');
      }
    });
  
    // Fonction de vérification des informations d'identification (côté client)
    function checkCredentials(username, password) {
      // Ici, tu devras remplacer cette logique par une vérification côté serveur
      // avec une base de données d'utilisateurs et des autorisations
      const authorizedUsers = [
        { username: 'veterinaire1', password: 'password1', role: 'veterinaire' },
        { username: 'employe1', password: 'password2', role: 'employe' },
        { username: 'admin', password: 'password3', role: 'admin' }
      ];
  
      const user = authorizedUsers.find(u => u.username === username && u.password === password);
  
      return user !== undefined;
    }
  });
  







 // Fonction pour définir la visibilité des boutons en fonction du statut d'administrateur
function configurerVisibiliteBoutons() {
    const boutonsModifier = document.querySelectorAll('.btn-warning');
    const boutonsSupprimer = document.querySelectorAll('.btn-danger');

    boutonsModifier.forEach(function (bouton) {
        bouton.style.display = isAdmin ? 'inline-block' : 'none';
    });

    boutonsSupprimer.forEach(function (bouton) {
        bouton.style.display = isAdmin ? 'inline-block' : 'none';
    });
}

 // Appeler la fonction lors du chargement de la page
window.onload = configurerVisibiliteBoutons;