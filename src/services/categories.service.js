const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const { dataValues } = await Category
  .create({ name });
  // const { password: _, ...userWithoutPassword } = dataValues;

  // // const token = generateToken(userWithoutPassword);
  return dataValues;
};

module.exports = {
  createCategory,
};