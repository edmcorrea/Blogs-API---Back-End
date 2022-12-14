const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);
const { BlogPost, Category, User, PostCategory } = require('../models');

const getPosts = async () => {
  const results = await BlogPost.findAll({
    include: { all: true, attributes: { exclude: ['password'] } },
    // include: [
    //   {
    //     model: User,
    //     as: 'user',
    //     attributes: { exclude: ['password'] },
    //   },
    //   {
    //     model: Category,
    //     as: 'categories',
    //   },
    // ],
  });
  return results;
};

const findById = async (id) => {
  const data = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  return data;
};

const checkUserPost = async (id, userId) => BlogPost.findOne({ where: { id, userId } });

const updateById = async ({ title, content }, id) => {
  const updated = await BlogPost.update({ title, content }, { where: { id } });
  return { type: null, message: updated };
};

const checkCategoriesToPost = async (id) => {
  const checkCategory = await Category.findOne({ where: { id } });
  return checkCategory;
};

const createPost = async (post, categoryIds) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const postCreated = await BlogPost.create(post, { transaction: t });

        await Promise.all(categoryIds
          .map(async (categoryId) => (PostCategory.create(
          { categoryId, postId: postCreated.dataValues.id },
          { transaction: t },
        ))));
        return postCreated.dataValues;
      });
      console.log(result);
      return result;
  } catch (error) {
    return { type: null, message: 'error' };
  }
};

const deleteById = async (id) => {
  const data = await BlogPost.destroy({ where: { id } });
  return data;
};

module.exports = {
  getPosts,
  findById,
  checkUserPost,
  checkCategoriesToPost,
  updateById,
  createPost,
  deleteById,
};