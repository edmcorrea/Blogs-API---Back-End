const { authService } = require('../services');

const login = async (req, res) => {
  const { email, password } = await authService.validateBody(req.body);
  
  const token = await authService.autenticate({ email, password });
  
  res.status(200).json(token);
};

module.exports = {
  login,
};