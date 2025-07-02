const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/mysql-connect');
const Roles = require('./roles');

class Users extends Model {
  static async getAllUsers() {
    try {
      return await Users.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async findUserByName(email, password) {
    try {
      const user = Users.findOne({
        where: {
          email,
          password,
        },
        include: {
          model: Roles,
          as: 'role',
          attributes: ['role_id', 'name'],
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      return await Users.findByPk(id, {
        include: {
          model: Roles,
          as: 'role',
          attributes: ['role_id', 'name'],
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

Users.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Roles,
        key: 'role_id',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    last_login: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at', // map Sequelize's createdAt to your DB column
    updatedAt: 'updated_at', // map Sequelize's updatedAt to your DB column
  }
);

Users.belongsTo(Roles, {
  foreignKey: 'role_id',
  as: 'role',
});

module.exports = Users;
