const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/mysql-connect'); // this is the Sequelize instance now

class Roles extends Model {
  static async getAllRoles() {
    try {
      return await Roles.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getRoleById(id) {
    try {
      return await Roles.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
}

Roles.init(
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: 'roles',
    tableName: 'roles',
    timestamps: true,
    createdAt: 'created_at', // map Sequelize's createdAt to your DB column
    updatedAt: 'updated_at', // map Sequelize's updatedAt to your DB column
  }
);

module.exports = Roles;
