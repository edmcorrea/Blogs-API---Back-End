const express = require('express');
const { userController } = require('../controllers');
const { validateNewUser } = require('../midlleware/validateNewUser');
const { validateToken } = require('../midlleware/validateToken');

const router = express.Router();

router.get('/', validateToken, userController.getUsers);
router.post('/', validateNewUser, userController.createUser);
router.get('/:id', validateToken, userController.findById);
router.delete('/me', validateToken, userController.deleteUser);

module.exports = router;