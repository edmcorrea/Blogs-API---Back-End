const User = require('../models/User');
const { generateToken } = require('../utils/JWT');

const { validateEmail } = require('./validation/schema');

const validateBody = (body) => {
  const { error, value } = validateEmail.validate(body);

  if (error) throw error;

  return value;
};

const autenticate = async ({ email, password }) => {
  // const login = await User.findOne({
  //   attributes: ['id', 'email', 'name'],
  //   where: { email, password } });

  const login = await User.findAll({ where: { email, password } });

    // console.log(login);

  if (!login) {
    const status = 400;
    const message = 'Invalid fields';

    const error = { status, message };

    throw error;
  }

  const token = generateToken(login.dataValues);

  return { token };
};

module.exports = {
  validateBody,
  autenticate,
};