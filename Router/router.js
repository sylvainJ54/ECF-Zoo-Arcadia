import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";

// Creating a route for the 404 page (page not found)
const route404 = new Route("404", "Page introuvable", "/assets/pages/404.html", []);

// Function to retrieve the route corresponding to a given URL
const getRouteByUrl = (url) => {
    let currentRoute = null;
  // Browse all routes to find the connection
allRoutes.forEach((element) => {
    if (element.url == url) {
        currentRoute = element;
    }
});
  // If no match is found, return route 404
if (currentRoute != null) {
    return currentRoute;
} else {
    return route404;
}
};

// Function to load page content
const LoadContentPage = async () => {
    const path = window.location.pathname;
  //Retrieving the current URL
    const actualRoute = getRouteByUrl(path);
  //Check page access rights
  const allRolesArray = actualRoute.authorize;
  if(allRolesArray.length > 0){
    if(allRolesArray.includes("disconnected")){
      if(isConnected()){
        window.location.replace ("/");
      }
    }
    else{
      const roluser = getRole();
      if(!allRolesArray.includes(roluser)){
        window.location.replace ("/");
      }
    }
  };
  // Retrieving HTML content from the route
    const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
  // Adding HTML content to element with id "main-page"
    document.getElementById("main-page").innerHTML = html;

  // Adding JavaScript content
if (actualRoute.pathJS != "") {
    // Creating a script tag
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("src", actualRoute.pathJS);

    // Adding the script tag to the body of the document
    document.querySelector("body").appendChild(scriptTag);
}

  // Changement du titre de la page
document.title = actualRoute.title + " - " + websiteName;

  //Afficher et masquer les éléments en fonction du role
  showAndHideElementsForRoles();
};

// Fonction pour gérer les événements de routage (clic sur les liens)
const routeEvent = (event) => {
    event.preventDefault();
  // Mise à jour de l'URL dans l'historique du navigateur
    window.history.pushState({}, "", event.target.href);
  // Chargement du contenu de la nouvelle page
    LoadContentPage();
};

// Gestion de l'événement de retour en arrière dans l'historique du navigateur
window.onpopstate = LoadContentPage;
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent;
// Chargement du contenu de la page au chargement initial
LoadContentPage();