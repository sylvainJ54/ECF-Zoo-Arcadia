 // modification des services si administrateur
const isAdmin = false; // Remplacez ceci par la logique réelle d'authentification

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