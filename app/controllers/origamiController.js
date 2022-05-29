const origamiController = {

    getPath: function (req, res) {
        res.render("origami.ejs");
    },

    pumpkinPath: function (req, res) {
        res.render("pumpkin.ejs");
    },

    spiderPath: function (req, res) {
        res.render("spider.ejs");
    },

    ghostPath: function (req, res) {
        res.render("ghost.ejs");
    }

};

module.exports = origamiController;