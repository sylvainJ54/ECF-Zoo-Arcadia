// Récupération des données du formulaire
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

// Construction de l'URL avec les données du formulaire
var url = '../assets/php/login.php?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);

// Envoi de la requête GET
fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Erreur HTTP, statut :' + response.status);
    }
    return response.json();
})
.then(data => {
    // Traitement de la réponse
    console.log(data);
})
.catch(error => {
    // Gestion des erreurs
    console.error('Erreur lors de la requête:', error);
});
