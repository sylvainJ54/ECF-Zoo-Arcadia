import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/", "habitatArctique", "/pages/habitatArctique.html"),
    new Route("/", "habitatDesert", "/pages/habitatDesert.html"),
    new Route("/", "habitatOcean", "/pages/habitatOcean.html"),
    new Route("/", "habitatSavane", "/pages/habitatSavane.html"),
    new Route("/", "habitatTropical", "/pages/habitatTropical.html"),
    new Route("/", "Contact", "/pages/contact.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";