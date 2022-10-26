const { User } = require('../models');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  getUsers,
};