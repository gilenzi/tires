const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/mysql-connect'); // this is the Sequelize instance now

class Height extends Model {
  static async getAllHeights() {
    try {
      return await Height.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getHeightById(id) {
    try {
      return await Height.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
}

Height.init(
  {
    height_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'height',
    tableName: 'height',
    timestamps: false,
  }
);

module.exports = Height;
