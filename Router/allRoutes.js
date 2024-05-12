import Route from "./Route.js";

//Define your routes here
export const allRoutes = [
    new Route("/", "Accueil", "./assets/pages/home.html", []),

    new Route("/Arctique", "habitatArctique", "./assets/pages/Arctique/habitatArctique.html", []),
    new Route("/Mikki", "Mikki", "./assets/pages/Arctique/whiteWolf.html", []),
    new Route("/Winnie", "Winnie", "./assets/pages/Arctique/whiteBear.html", []),
    new Route("/Daiza", "Daiza", "./assets/pages/Arctique/Walrus.html", []),
    new Route("/Winnie", "Winnie", "./assets/pages/Arctique/whiteBear.html", []),
    new Route("/Robi", "Robi", "./assets/pages/Arctique/pinguin.html", []),

    new Route("/Desert", "habitatDesert", "./assets/pages/Desert/habitatDesert.html", []),
    new Route("/Jana", "Jana", "./assets/pages/Desert/Addax.html", []),
    new Route("/Gamal", "Gamal", "./assets/pages/Desert/Camel.html", []),
    new Route("/Bolt", "Bolt", "./assets/pages/Desert/Guepard.html", []),
    new Route("/Henna", "Henna", "./assets/pages/Desert/Rhinoceros.html", []),

    new Route("/Ocean", "habitatOcean", "./assets/pages/Ocean/habitatOcean.html", []),
    new Route("/Flipper", "Flipper", "./assets/pages/Ocean/Dolphin.html", []),
    new Route("/Andre", "André", "./assets/pages/Ocean/Lamentin.html", []),
    new Route("/Alysee", "Alysée", "./assets/pages/Ocean/MantaRay.html", []),
    new Route("/Menphys", "Menphys", "./assets/pages/Ocean/Turtle.html", []),

    new Route("/Savanne", "habitatSavane", "./assets/pages/Savanne/habitatSavanne.html", []),
    new Route("/Leo", "Léo", "./assets/pages/Savanne/Leo.html", []),
    new Route("/Azam", "Azam", "./assets/pages/Savanne/Leopard.html", []),
    new Route("/Abu", "Abu", "./assets/pages/Savanne/Elephant.html", []),
    new Route("/Nora", "Nora", "./assets/pages/Savanne/Zebra.html", []),

    new Route("/Tropical", "habitatTropical", "./assets/pages/Tropical/habitatTropical.html", []),
    new Route("/Kiwi", "Kiwi", "./assets/pages/Tropical/Toucan.html", []),
    new Route("/Utari", "Utari", "./assets/pages/Tropical/Tapir.html", []),
    new Route("/Flash", "Flash", "./assets/pages/Tropical/Lazy.html", []),
    new Route("/Shiva", "Shiva", "./assets/pages/Tropical/Tiger.html", []),

    new Route("/Contact", "Contact", "./assets/pages/auth/contact.html", []),
    new Route("/Signin", "Connexion", "./assets/pages/auth/signin.html", ["disconnected"],"./assets/js/auth/signin.js"),
    new Route("/Signup", "Inscrption", "./assets/pages/auth/signup.html", ["admin"], "./assets/js/auth/signup.js")];

//The title is displayed like this: Route.title - websitename
export const websiteName = "Arcadia";