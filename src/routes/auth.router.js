const express = require('express');
const { authController } = require('../controllers');
const { validateLogin } = require('../midlleware/validateLogin');

const router = express.Router();

router.post('/', validateLogin, authController.login);

module.exports = router;