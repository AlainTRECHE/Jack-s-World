
const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const placeController = require("./controllers/placeController");
const boogieController = require("./controllers/boogieController");
const scaryFacesController = require("./controllers/scaryFacesController");
const diceController = require("./controllers/421Controller");
const origamiController = require("./controllers/origamiController");
const christmasContoller = require("./controllers/christmasController");
const userController = require("./controllers/userController");
const rpgController = require("./controllers/rpgController");

router.get("/", mainController.index);
router.get("/scary", placeController.mainRoad);
router.get("/scary/scary-faces", scaryFacesController.scaryFaces);
router.get("/oogie-boogie", boogieController.getPath);
router.get("/oogie-boogie/rpg",rpgController.getPath);
router.get("/oogie-boogie/421", diceController.getPath);
router.get("/origami", origamiController.getPath);
router.get("/origami/pumpkin",origamiController.pumpkinPath);
router.get("/origami/ghost", origamiController.ghostPath);
router.get("/origami/spider", origamiController.spiderPath);
router.get("/christmas-town", christmasContoller.getPath);


router.post("/signup", userController.doSignup);
router.post("/login", userController.doLogin);
router.get("/logout", userController.logout);


router.use(function(req,res){
    res.status(404);
    res.render("page404");
});


module.exports = router;