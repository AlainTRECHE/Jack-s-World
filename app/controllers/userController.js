const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const { User } = require("../models/index");

const userController = {
    getRegisterPage(req, res) {
        res.render("register");
    },

    getLoginPage(req, res) {
        res.render("login");
    },

    async register(req, res) {
        try {
            const { firstname, lastname, email, password, passwordConfirm } =
                req.body;

            // Email doit etre un email
            if (!emailValidator.validate(email)) {
                res.render("register", {
                    error: "Votre courriel est invalide",
                });
            }

            // password !== passwordConfirm
            // Si le mot de passe doit suivre des recommandations, on les vérifie aussi
            // Si le mot de passe doit contenir des caracteres speciaux
            // Si il doit avoir une longueur minimale
            if (password !== passwordConfirm) {
                res.render("register", {
                    error: "Les mots de passe ne sont pas identiques",
                });
            }

            // Vérifier si user existe déja en BDD
            const exists = await User.findOne({
                where: { email: email },
            });

            if (exists) {
                res.render("register", { error: "L'utilisateur existe déjà" });
            }

            // Chiffrage mot de passe
            // générer le sel
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            // Un fois qu'on a le MDP, on peut instancier user :)
            const user = new User({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hash,
            });

            // Quand on a une instance de User, on peut sauvegarder dans la BDD
            await user.save();

            res.redirect("login");
        } catch (error) {
            // récupérer les erreurs de validation et renvoyez
            // ces erreur comme infomation à l'utilisateur
            // sur la page register
            console.error(error);
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Si le mot de passe doit suivre des recommandations, on les vérifie aussi
            // Si le mot de passe doit contenir des caracteres speciaux
            // Si il doit avoir une longueur minimale

            if (!emailValidator.validate(email)) {
                res.render("login", { error: "Le courriel est invalide" });
            }

            // on va vérifier si user avec email existe
            const user = await User.findOne({
                where: { email: email },
            });

            let ok = false;
            if (user) {
                // verif mot de passe
                ok = await bcrypt.compare(password, user.password);
            }

            if (ok) {
                delete user.dataValues.password;

                // Si tout va bien on fait une session
                req.session.user = user;

                return res.redirect("/");
            }

            res.render("login", { error: "Something went wrong" });
        } catch (error) {
            console.error(error);
        }
    },

    // Tom dit verif dans la route : ok !
    profile(req, res) {
        res.render("profile");
    },

    logout(req, res) {
        req.session.user = false;

        res.redirect("/");
    },
};

module.exports = userController;