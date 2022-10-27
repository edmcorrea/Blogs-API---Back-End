const express = require('express');
const { categoryController } = require('../controllers');
const { validateCategory } = require('../midlleware/validateCategory');

const { validateToken } = require('../midlleware/validateToken');

const router = express.Router();

// router.get('/', validateToken, userController.getUsers);
router.post('/', validateToken, validateCategory, categoryController.createCategory);
// router.get('/:id', validateToken, userController.findById);

module.exports = router;