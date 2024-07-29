const User = require('../models/user.js');
const express = require('express');
const router = express.Router();

router.get('/sign-up', async (req, res) => {
    res.render('auth/sign-up.ejs');
});
router.post('/sign-up', async (req, res) => {
    res.send('form submission accepted');
});

module.exports = router;