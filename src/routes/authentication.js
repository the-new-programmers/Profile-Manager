const express = require('express');
const expressRouter = express.Router();

const passport = require('passport');

expressRouter.get('/', (req, res) => {
    res.render('test/index');
});

expressRouter.get('/signup', (req, res) => {
    res.render('test/signup');
});

expressRouter.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/signup',
    failureRedirect: '/'
}));

module.exports = expressRouter;