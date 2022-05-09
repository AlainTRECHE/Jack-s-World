const Character = require("./../models/scaryFacesModel");



const scaryFacesController = {
    async scaryFaces (req, res) {
        try {
            const characters = await Character.findAll();
            res.render("scary-faces.ejs", { characters });

        } catch (error) {
            console.log(error);
        }
    }
    /*  let scaryThing = req.params.name;
        res.render("scary-faces.ejs");

        for (let thing of scary) {
            if (thing.name === scaryThing) {
                res.render(`${scaryThing}`);
            } };*/
};

module.exports = scaryFacesController;