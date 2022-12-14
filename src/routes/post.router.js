const express = require('express');
const { postController } = require('../controllers');
const { updateValidatePost, validatePost } = require('../midlleware/validatePost');

const { validateToken } = require('../midlleware/validateToken');

const router = express.Router();

router.get('/', validateToken, postController.getPosts);
router.get('/search', validateToken, postController.searchByQuery);
router.post('/', validateToken, validatePost, postController.createPost);
router.get('/:id', validateToken, postController.findById);
router.put('/:id', validateToken, updateValidatePost, postController.updateById);
router.delete('/:id', validateToken, postController.deleteById);

module.exports = router;
