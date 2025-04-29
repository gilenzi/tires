const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/mysql-connect'); // this is the Sequelize instance now

class Width extends Model {
  static async getAllWidths() {
    try {
      return await Width.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getWidthById(id) {
    try {
      return await Width.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
}

Width.init(
  {
    width_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    width: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'width',
    tableName: 'width',
    timestamps: false,
  }
);

module.exports = Width;
