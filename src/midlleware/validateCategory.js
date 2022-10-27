const { schemaCategory } = require('../services/validation/schema');

const validateCategory = (req, res, next) => {
  const { error } = schemaCategory.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validateCategory,
};