const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');

if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
};

const User = require('../models/userModel').User;
const { auth } = require('../../config/auth');
const admin = require('../../config/admin');

const router = express.Router();
router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/',
        failuereFlash: true
    }),
    async function (req, res) {
        const userTotoken = {
            _id: req.user._id,
        };
        const token = jwt.sign({
                userID: userTotoken,
                admin: req.user.admin
            },
            'SIEMA',
            // process.env.JWT_SECRET,
            (err, token) => {
                return res.redirect(`/users/loggedin/?secret_token=${token}`);
            })
        
    });

router.post('/register', async (req, res) => {
    const log = await User.findOne({ login: req.body.login });
    const em = await User.findOne({ email: req.body.email });
    if (log) {
        res.render('index', { message: "This login is taken", login: "" });
    } else if (em) {
        res.render('index', { message: "This email is taken", login: "" });
    } else if (req.body.password === req.body.confirm_password) {
        let user = new User({
            login: req.body.login,
            password: req.body.password,
            email: req.body.email,
            admin: req.body.admin
        });
        try {
            await user.hashPassword();
            await user.save();
            res.render('index', { message: `User ${req.body.login} registered successfully!`, login: req.body.login });
        } catch (error) {
            const result = await model.handleError(error);
            res.render('index', { message: result, login: "" });
        }
    }
    else return res.render('index', { message: `Passwords are not equal`, login: req.body.login });
});

router.put('/update/:id', async (req, res) => {
    const user = await model.User.findById(req.params.id);
    if (!user) return res.status(404).send('The user with the given ID does not exist');

    user.login = req.body.login ? req.body.login : user.login;
    user.email = req.body.email ? req.body.email : user.email;
    user.admin = req.body.admin ? req.body.admin : user.admin;

    const result = await user.save();

    res.send(result);
});

router.get('/loggedin', auth, (req, res) => {
    res.render('loggedIn', { login: req.user.login, admin: req.user.admin });
});

router.get('/loginError', (req, res) => {
    res.render('index', { message: "Invalid login or password", login: "" });
});

router.get('/loggedout', (req, res) => {
    localStorage.removeItem('x-auth-token');
    res.render('index', { message: "User successfully logged out", login: "" });
});

router.get('/api/users', (req, res) => {
    localStorage.removeItem('x-auth-token');
    res.render('index', { message: "User successfully logged out", login: "" });
});

router.get('/api/getusers', async(req, res) => {
    const users = await User.find();
    res.send(users);
});

router.delete('/user/:id', async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) return res.status(404).send('The user with the given ID does not exist');

    res.send(user);
});

module.exports = router;
