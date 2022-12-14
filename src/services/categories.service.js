const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const { dataValues } = await Category
  .create({ name });
  return dataValues;
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};