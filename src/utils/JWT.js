require('dotenv/config');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'paocomqueijoemortadelanachapa';

const generateToken = (payload) => {
  // const payload = { id, name, email };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload }, TOKEN_SECRET_KEY, jwtConfig); // TOKEN -> ABC.1234.XYZ

  return token;
};

module.exports = {
  generateToken,
};