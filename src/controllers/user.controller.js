const { userService } = require('../services');
const { decodedToken } = require('../utils/JWT');

const getUsers = async (_req, res) => {
 const users = await userService.getUsers();
 return res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const data = await userService.findById(id);

  if (!data) return res.status(404).json({ message: 'User does not exist' });
  
  return res.status(200).json(data);
};

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);

  if (type === 'ALREADY_EXISTS') {
    return res.status(409).json({ message });
  }
  return res.status(201).json({ token: message });
 };

 const deleteUser = async (req, res) => {
  const { authorization } = req.headers;

  const decodedId = decodedToken(authorization);
  await userService.deleteUser(decodedId);

  return res.status(204).end();
 };

module.exports = {
  getUsers,
  findById,
  createUser,
  deleteUser,
};