const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY || 'paocomqueijoemortadelanachapa';

const generateToken = ({ id, name, email }) => {
  const payload = { id, name, email };

  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig); // TOKEN -> ABC.1234.XYZ

  return token;
};

module.exports = {
  generateToken,
};