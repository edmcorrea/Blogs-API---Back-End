const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const autenticate = async ({ email, password }) => {
  const login = await User.findOne({
    where: { email, password } });

  if (!login) {
    return { type: 'INVALID_LOGIN', message: 'Invalid fields' };
  }

  const { password: _, ...userWithoutPassword } = login.dataValues;

  const token = generateToken(userWithoutPassword);

  return { type: null, message: token };
};

module.exports = {
  autenticate,
};