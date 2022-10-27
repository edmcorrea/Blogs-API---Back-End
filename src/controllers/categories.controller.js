const { categoryService } = require('../services');

// const getUsers = async (_req, res) => {
//  const users = await userService.getUsers();
//  return res.status(200).json(users);
// };

// const findById = async (req, res) => {
//   const { id } = req.params;

//   const data = await userService.findById(id);

//   if (!data) return res.status(404).json({ message: 'User does not exist' });
  
//   return res.status(200).json(data);
// };

const createCategory = async (req, res) => {
  const data = await categoryService.createCategory(req.body);

  return res.status(201).json(data);
 };

module.exports = {
  // getUsers,
  // findById,
  createCategory,
};