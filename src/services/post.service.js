const { BlogPost, Category, User } = require('../models');
// const PostCategory = require('../models/PostCategory');
// const { generateToken } = require('../utils/JWT');

const getPosts = async () => {
  const results = await BlogPost.findAll({
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
  return results;
};

// const findById = async (id) => {
// try {
//   const data = await User.findOne({
//     where: { id },
//     attributes: { exclude: ['password'] },
//   });

//   return data;
// } catch (error) {
//   return error;
// }
// };

// const createPost = async ({ title, content, categoryIds }) => {
//   // const validateCategory = await User.findOne({ where: { email } });

//   // if (validateEmail) {
//   //   return { type: 'ALREADY_EXISTS', message: 'User already registered' };
//   // }
//   const { dataValues } = await BlogPost
//   .create({ title, content, categoryIds });

//   const token = generateToken(userWithoutPassword);
//   return { type: null, message: token };
// };

module.exports = {
  getPosts,
  // findById,
};