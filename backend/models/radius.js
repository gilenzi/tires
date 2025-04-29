const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/mysql-connect'); // this is the Sequelize instance now

class Radius extends Model {
  static async getAllRadiuses() {
    try {
      return await Radius.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getRadiusById(id) {
    try {
      return await Radius.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
}

Radius.init(
  {
    radius_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    radius: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'radius',
    tableName: 'radius',
    timestamps: false,
  }
);

module.exports = Radius;
