const {
    Character
} = require("../models");

const scary = require("../scary.json");

const scaryFacesController = {

    async scaryFaces(req, res) {


        let scaryThing = req.params.name;
        res.render("scary-faces.ejs");

        for (let thing of scary) {
            if (thing.name === scaryThing) {
                res.render(`${scaryThing}`);
            }

        };
        try {

            const characters = await Character.findAll({

                attributes: {
                    exclude: ["created_at", "updated_at"]
                },

            });

            res.render("scary-faces", {
                characters
            });

        } catch (error) {
            console.log(error);
        }
    }};

module.exports = scaryFacesController;