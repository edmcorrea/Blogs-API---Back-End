const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const createUser = async ({ displayName, email, password, image }) => {
  const validateEmail = await User.findOne({ where: { email } });

  if (validateEmail) {
    return { type: 'ALREADY_EXISTS', message: 'User already registered' };
  }
  const { dataValues } = await User
  .create({ displayName, email, password, image });
  const { password: _, ...userWithoutPassword } = dataValues;
  
  console.log('CONSOLELOG', userWithoutPassword);

  const token = generateToken(userWithoutPassword);
  return { type: null, message: token };
};

module.exports = {
  getUsers,
  createUser,
};