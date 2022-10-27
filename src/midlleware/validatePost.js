const { schemaPost } = require('../services/validation/schema');

const validatePost = (req, res, next) => {
  const { error } = schemaPost.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validatePost,
};