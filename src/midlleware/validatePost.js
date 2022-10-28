const { schemaPost, updateSchemaPost } = require('../services/validation/schema');

const validatePost = (req, res, next) => {
  const { error } = schemaPost.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const updateValidatePost = (req, res, next) => {
  const { error } = updateSchemaPost.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validatePost,
  updateValidatePost,
};