const express = require('express');
const { postController } = require('../controllers');
const { updateValidatePost } = require('../midlleware/validatePost');
// const { validateCategory } = require('../midlleware/validateCategory');

const { validateToken } = require('../midlleware/validateToken');

const router = express.Router();

router.get('/', validateToken, postController.getPosts);
// router.post('/', validatePost, postController.createPost);
router.get('/:id', validateToken, postController.findById);
router.put('/:id', updateValidatePost, postController.updateById);

module.exports = router;
