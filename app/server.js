// module de paramètrage du serveur
const dotenv = require("dotenv");
dotenv.config();
// import du module express
const express = require("express");

// création du serveur via express
const server = express();

// définition d'EJS comme moteur de rendu de notre serveur
server.set("view engine", "ejs");
server.set("views", "app/views");
server.use(express.static("app/static"));

// Permet de lire le body des POST
server.use(express.urlencoded({ extended: true }));

// importer la bibliotheque express-session
const session = require("express-session");
const userMiddleware = require("../app/middlewares/user.js");

// on configure les sessions
server.use(session({
    // même si req.session est vide je crée "le casier"
    saveUninitialized: true,
    // a toutes les requetes je recrée le token dans les cookies
    resave: true,
    // le secret sert de point de départ unique pour généré la "clef de session"
    secret: process.env.SESSION_SECRET || "Change ME or get hacked"

}));

server.use(userMiddleware);


// compteur de visites
let compteurVisite = 0;
server.use((request, response, next) => {

    if (request.url !== "/favicon.ico"){
        compteurVisite++; }
    response.compteur = compteurVisite;
    next();

});

// importation du routeur
const router = require("./router");

// on indique au serveur que l'on veut utiliser le routeur
server.use(router);

// définition des paramèteres du serveur
const PORT = process.env.PORT || 7000;
const URL = "http://localhost:";

// paramètrage du serveur
server.set("port", PORT);
server.set("baseUrl", URL);



// définition de l'écoute sur le port 7000
server.listen(PORT, () => {
    console.log(`server listening on port ${PORT} ${URL}`);
});



// exportation du module
module.exports = server;