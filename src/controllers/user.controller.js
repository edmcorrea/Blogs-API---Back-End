const { userService } = require('../services');

const getUsers = async (_req, res) => {
 const users = await userService.getUsers();
 return res.status(200).json(users);
};

module.exports = {
  getUsers,
};