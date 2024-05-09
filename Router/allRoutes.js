import Route from "./Route.js";

//Define your routes here
export const allRoutes = [
    new Route("/", "Accueil", "./assets/pages/home.html", []),
    new Route("/Arctique", "habitatArctique", "./assets/pages/habitats/habitatArctique.html", []),
    new Route("/Desert", "habitatDesert", "./assets/pages/habitats/habitatDesert.html", []),
    new Route("/Ocean", "habitatOcean", "./assets/pages/habitats/habitatOcean.html", []),
    new Route("/Savanne", "habitatSavane", "./assets/pages/habitats/habitatSavanne.html", []),
    new Route("/Tropical", "habitatTropical", "./assets/pages/habitats/habitatTropical.html", []),
    new Route("/Contact", "Contact", "./assets/pages/auth/contact.html", []),
    new Route("/Signin", "Connexion", "./assets/pages/auth/signin.html", ["disconnected"],"./assets/js/auth/signin.js"),
    new Route("/Signup", "Inscrption", "./assets/pages/auth/signup.html", ["admin"], "./assets/js/auth/signup.js")];

//The title is displayed like this: Route.title - websitename
export const websiteName = "Arcadia";