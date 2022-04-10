// module routeur

// importation du module express
const express = require("express");
const router = express.Router();

// importation de places.json pour la route dynamique
const places = require("../places.json");

// importation de boogie.json pour la seconde route dynamique
const boogie = require("../boogie.json");

// importation de scary.json pour la troisième route dynamique
const scary = require("../scary.json");

// définition de la route principale
router.get("/", function (req, res){
    res.render("index.ejs")

});

// route dynamique
router.get("/:name", function (req,res){
    let placeName = req.params.name;

    for (let place of places) {
        if (place.name === placeName) {
        res.render(`${placeName}`)
    }
    
}});

// seconde route dynamique
router.get("/oogie-boogie/:name", function (req,res){
    let boogieGame = req.params.name;

    for (let game of boogie) {
        if (game.name === boogieGame) {
        res.render(`${boogieGame}`)
    }
    
}});

// troisième route dynamique
router.get("/scary/:name", function (req,res){
    let scaryThing = req.params.name;
res.render("scary-faces");
return;
    for (let thing of scary) {
        console.log("je suis dans le for",req.url)
        console.log((thing.name === scaryThing))
        if (thing.name === scaryThing) {
console.log("yeeeeeep!!")
        res.render(`${scaryThing}`)
    }
    
}});

// gestion 404
router.use(function(req,res){
    res.status(404);
    res.render("page404");
});

// exportation du module
module.exports = router;