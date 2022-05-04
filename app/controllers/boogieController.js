// importation de boogie.json pour la seconde route dynamique
const boogie = require("../boogie.json");

boogieController = {
    getPath: function (req,res){
        let boogieGame = req.params.name;

        for (let game of boogie) {
            if (game.name === boogieGame) {
                res.render("oogie-boogie.ejs");
            }

        }}};

        module.exports = boogieController;