require('dotenv/config');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'paocomqueijo';

const generateToken = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  // console.log('PAYLOAD', payload);
  const token = jwt.sign({ ...payload }, TOKEN_SECRET_KEY, jwtConfig); // TOKEN -> ABC.1234.XYZ
  return token;
};

const verifyToken = (token) => {
  try {
    const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
    return { type: null, validateToken };
  } catch (_error) {
    return { type: 'EXPIRED_INVALID', message: 'Expired or invalid token' };
  }
};

const decodedToken = (token) => {
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET_KEY);
    return decoded.id;
  } catch (_error) {
    return { type: 'EXPIRED_INVALID', message: 'Expired or invalid token' };
  }
};

module.exports = {
  generateToken,
  verifyToken,
  decodedToken,
};