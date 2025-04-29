const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/mysql-connect'); // this is the Sequelize instance now

class Type extends Model {
  static async getAllTypes() {
    try {
      return await Type.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getTypeById(id) {
    try {
      return await Type.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
}

Type.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'type',
    tableName: 'type',
    timestamps: false,
  }
);

module.exports = Type;
