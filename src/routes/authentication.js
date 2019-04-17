const express = require('express');
const expressRouter = express.Router();

const passport = require('passport');

expressRouter.get('/', (req, res) => {
    res.render('layouts/main');
});

module.exports = expressRouter;