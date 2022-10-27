const express = require('express');
const { postController } = require('../controllers');
const { validatePost } = require('../midlleware/validatePost');
// const { validateCategory } = require('../midlleware/validateCategory');

// const { validateToken } = require('../midlleware/validateToken');

const router = express.Router();

// router.get('/', validateToken, postController.getCategories);
router.post('/', validatePost, postController.createPost);
// router.get('/:id', validateToken, userController.findById);

module.exports = router;