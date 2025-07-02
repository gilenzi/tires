const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/mysql-connect'); // this is the Sequelize instance now

class Brands extends Model {
  static async getAllBrands() {
    try {
      return await Brands.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getBrandById(id) {
    try {
      return await Brands.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
}

Brands.init(
  {
    brand_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'brands',
    tableName: 'brands',
    timestamps: false,
  }
);

module.exports = Brands;
