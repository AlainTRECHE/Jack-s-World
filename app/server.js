// module de paramètrage du serveur

// import du module express
const express = require("express");

// création du serveur via express
const server = express();

// définition d'EJS comme moteur de rendu de notre serveur
server.set("view engine", "ejs");
server.set("views", "app/views");
server.use(express.static("static"));

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
const PORT = 7000;
const URL = "http://localhost:";

// paramètrage du serveur
server.set("port", PORT);
server.set("baseUrl", URL);



// définition de l'écoute sur le port 7000
server.listen(PORT, () => {
    console.log(`server listening on port ${PORT} ${URL}`)
});



// exportation du module
module.exports = server;