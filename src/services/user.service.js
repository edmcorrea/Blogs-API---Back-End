const User = require('../models/User');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  getUsers,
};