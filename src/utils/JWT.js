require('dotenv/config');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'paocomqueijo';

const generateToken = (payload) => {
  // const payload = { id, name, email };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload }, TOKEN_SECRET_KEY, jwtConfig); // TOKEN -> ABC.1234.XYZ

  return token;
};

const verifyToken = (token) => {
  try {
    const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
    return { type: null, validateToken };
  } catch (_error) {
    return { type: 'EXPIRED_INVALID', message: 'Expired or invalid token' };
  }
  // const user = jwt.verify(token, TOKEN_SECRET_KEY);
  // console.log('CONSOLE', user);

  // return user;
};

module.exports = {
  generateToken,
  verifyToken,
};