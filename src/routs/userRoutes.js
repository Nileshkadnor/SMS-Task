

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateEmail } = require('../middleware/regexMiddleware');


router.get('/profile', validateEmail, userController.getUserProfile);

module.exports = router;
