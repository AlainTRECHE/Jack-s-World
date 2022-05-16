const assert = require("assert");
const bcrypt = require("bcrypt");

const User = require("../models/user");

const userController = {

    getSignup: (req, res) => {
        res.render("/");
    },
    doSignup: async (req, res) => {

        try {
            const user = await User.findOne({
                where: {
                    username: req.body.username
                }
            });

            assert.ok(user == null, `User ${req.body.username} already exists`);

            const encryptedPwd = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: encryptedPwd
            });

            await newUser.save();

            res.redirect("/");

        } catch(err) {
            console.error(err);
            res.send(err.message);
        }
    },

    doLogin: async (req, res) => {
        const user = await User.findOne({
            where: { username: req.body.username }});

        if(user) {
            if(await bcrypt.compare(req.body.password, user.password)) {
                req.session.user = user;
                console.log("connecté");
                res.redirect("/");
            } else {
                res.send("error username or password");
            }
        } else {
            res.send("error username or password");
        }
    },

    logout: (req, res) => {
        req.session.destroy();
    },

};

module.exports = userController;