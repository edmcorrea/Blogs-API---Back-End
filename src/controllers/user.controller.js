const { userService } = require('../services');

const getUsers = async (_req, res) => {
 const users = await userService.getUsers();
 return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);

  if (type === 'ALREADY_EXISTS') {
    return res.status(409).json({ message });
  }
  return res.status(201).json({ token: message });
 };

module.exports = {
  getUsers,
  createUser,
};