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
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id'
    });

      models.Category.belongsToMany(models.BlogPost, {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
  }

  return PostCategory;
};
