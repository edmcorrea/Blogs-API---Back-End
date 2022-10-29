const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const findById = async (id) => {
try {
  const data = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  return data;
} catch (error) {
  return error;
}
};

const createUser = async ({ displayName, email, password, image }) => {
  const validateEmail = await User.findOne({ where: { email } });

  if (validateEmail) {
    return { type: 'ALREADY_EXISTS', message: 'User already registered' };
  }
  const { dataValues } = await User
  .create({ displayName, email, password, image });
  const { password: _, ...userWithoutPassword } = dataValues;

  const token = generateToken(userWithoutPassword);
  return { type: null, message: token };
};

const deleteUser = async (id) => {
  try {
    const data = await User.destroy({ where: { id } });
    return data;
  } catch (error) {
    return error;
  }
  };

module.exports = {
  getUsers,
  findById,
  createUser,
  deleteUser,
};