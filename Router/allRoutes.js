import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "./assets/pages/home.html"),
    new Route("/Arctique", "habitatArctique", "./assets/pages/habitatArctique.html"),
    new Route("/Desert", "habitatDesert", "./assets/pages/habitatDesert.html"),
    new Route("/Ocean", "habitatOcean", "./assets/pages/habitatOcean.html"),
    new Route("/Savanne", "habitatSavane", "./assets/pages/habitatSavanne.html"),
    new Route("/Tropical", "habitatTropical", "./assets/pages/habitatTropical.html"),
    new Route("/Contact", "Contact", "./assets/pages/contact.html"),
    new Route("/Signin", "Connexion", "./assets/pages/signin.html"),
    new Route("/Signup", "Inscrption", "./assets/pages/signup.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";