require('dotenv/config');

const JWT = require('../utils/JWT');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const user = await JWT.verifyToken(token);
  console.log('CONSOLELOGuser', user);

  if (user.type === 'EXPIRED_INVALID') {
    return res.status(401).json({ message: user.message });
  }

  req.user = user.validateToken;

  next();
};

module.exports = {
  validateToken,
};