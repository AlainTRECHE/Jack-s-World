const assert = require("assert");
const bcrypt = require("bcrypt");

const { User } = require("../models/user");

const userController = {
    // SIGN UP => 2 ACTIONS : affichage du forulaire et soumission du formulaire
    getSignup: (req, res) => {
        res.render("signup");
    },
    doSignup: async (req, res) => {
        // Est-ce que username déjà pris ?
        // Si oui -> Erreur
        // Sinon -> Je continue
        try {
            const user = await User.findOne({
                where: {
                    username: req.body.username
                }
            });

            console.log(user);

            // Je verifie que la condition est vrai sinon crashdown !
            assert.ok(user == null, `User ${req.body.username} already exists`);


            const encryptedPwd = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: encryptedPwd
            });

            await newUser.save();

            res.redirect("/user/login");

        } catch(err) {
            console.error(err);
            res.send(err.message);
        }
    },
    // LOGIN -> 2 ACTIONS
    getLogin: (req, res) => {
        res.render("login");
    },
    doLogin: async (req, res) => {
        // ETAPE 1 : Est-ce que j'ai user ?
        const user = await User.findOne({ where: { username: req.body.username }});

        if(user) {
            // ETAPE 2 : Est-ce que le mdp colle ?
            if(await bcrypt.compare(req.body.password, user.password)) {

                // ETAPE 3 je crée la session
                req.session.user = user;

                res.redirect("/");
            } else {
                res.send("Nope wrong username or password");
            }
        } else {
            res.send("Nope wrong username or password");
        }
    },
    // LOGOUT -> 1 ACTION
    logout: (req, res) => {
        // Je détruis "le casier" pour déconnecter l'utilisateur
        req.session.destroy();
    },
    // PROFILE -> 1ACTION
    profile: (req, res) => {
        res.render("profile");
    },


};

module.exports = userController;