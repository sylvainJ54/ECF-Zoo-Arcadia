// Assuming you have a form with an id of "loginForm" and input fields with ids "username" and "password"
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validation simple des champs (exemple)
  if (username === '' || password === '') {
      alert('Le nom d\'utilisateur et le mot de passe sont obligatoires.');
      return; // Sortir de la fonction submit si la validation échoue
  }

  // Préparation des données au format JSON (exemple)
  const data = {
      username: username,
      password: password
  };
  
  const jsonData = JSON.stringify(data);

  // Requête AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST','login.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Successful login
      console.log('vous êtes connecté !');
      // ... autres actions
    } else {
      // Failed login
      console.error('erreur de connexion !');
      
    }
  };
  xhr.onerror = function () {
    console.error('Une erreur réseau est survenue.');
    // ... Afficher un message d'erreur à l'utilisateur
  };
  xhr.send(jsonData);
});