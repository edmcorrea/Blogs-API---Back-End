const express = require('express');
const { userController } = require('../controllers');
const { validateNewUser } = require('../midlleware/validateNewUser');

const router = express.Router();

router.get('/', userController.getUsers);
router.post('/', validateNewUser, userController.createUser);

module.exports = router;