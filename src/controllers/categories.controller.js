const { categoryService } = require('../services');

const getCategories = async (_req, res) => {
 const categories = await categoryService.getCategories();
 return res.status(200).json(categories);
};

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
  // findById,
  createCategory,
  getCategories,
};