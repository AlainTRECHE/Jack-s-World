
const places = require("../places.json");

placeController = {
    mainRoad: function (req,res){
        let placeName = req.params.name;

        for (let place of places) {
            if (place.name === placeName) {
                res.render("scary.ejs");
            }

        }}};

module.exports = placeController;