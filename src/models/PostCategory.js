module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
    tableName: 'post_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

      models.Category.belongsToMany(models.BlogPost, {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
  }

  return PostCategory;
};
