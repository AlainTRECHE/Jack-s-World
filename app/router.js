
const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
//const placeController = require("./controllers/placeController");
//const boogieController = require("./controllers/boogieController";)
//const scaryFacesController = require("./controllers/scaryFacesController");

router.get("/", mainController.index);
//router.get("/:name", placeController.mainRoad);
//router.get("/oogie-boogie/:name", boogieController.getPath);
//router.get("/scary/:name", scaryFacesController.scaryFaces);

// gestion 404
router.use(function(req,res){
    res.status(404);
    res.render("page404");
});


module.exports = router;