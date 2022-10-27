const { categoryService } = require('../services');

const getCategories = async (_req, res) => {
 const categories = await categoryService.getCategories();
 return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  const data = await categoryService.createCategory(req.body);

  return res.status(201).json(data);
 };

module.exports = {
  createCategory,
  getCategories,
};