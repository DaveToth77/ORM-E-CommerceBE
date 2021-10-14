const {
  Model,
  DataTypes
} = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init({
  //todo category model (has many product models)
  id: {
    type: DataTypes.INTEGER,
    auto_increment: true,
    primaryKey: true,
    allowNull: false,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }




}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category',
});

module.exports = Category;