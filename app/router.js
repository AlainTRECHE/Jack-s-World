
const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const placeController = require("./controllers/placeController");
const boogieController = require("./controllers/boogieController");
const scaryFacesController = require("./controllers/scaryFacesController");
const diceController = require("./controllers/421Controller");
const origamiController = require("./controllers/origamiController");
const christmasContoller = require("./controllers/christmasController");


router.get("/", mainController.index);
router.get("/scary", placeController.mainRoad);
router.get("/scary/scary-faces", scaryFacesController.scaryFaces);
router.get("/oogie-boogie", boogieController.getPath); 
router.get("/oogie-boogie/421", diceController.getPath);
router.get("/origami", origamiController.getPath);
router.get("/christmas-town", christmasContoller.getPath);

/*// SIGN UP
router.get("/signup", userController.getSignup);
router.post("/signup", userController.doSignup);

// LOGIN
router.get("/login", userController.getLogin);
router.post("/login", userController.doLogin);

// LOGOUT
router.get("/logout", userController.logout);

// PROFILE
router.get("/profile", userController.profile);*/


// gestion 404
router.use(function(req,res){
    res.status(404);
    res.render("page404");
});


module.exports = router;