const { schemaLogin } = require('../services/validation/schema');

const validateLogin = (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);

  const { password } = req.body;

  if (error || password.length < 6) {
    return res.status(400).json({ message: 'Some required fields are missing',
    });
  }
  next();
};

module.exports = {
  validateLogin,
};