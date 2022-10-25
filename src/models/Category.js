module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
  });

  return Category;
};