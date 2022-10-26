const { schemaNewUser } = require('../services/validation/schema');

const validateNewUser = (req, res, next) => {
  const { error } = schemaNewUser.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validateNewUser,
};