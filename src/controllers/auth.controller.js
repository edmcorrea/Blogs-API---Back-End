const { authService } = require('../services');

const login = async (req, res) => {
  const { type, message } = await authService.autenticate(req.body);

  if (type) {
    return res.status(400).json({ message });
  }
  
  res.status(200).json({ token: message });
};

module.exports = {
  login,
};