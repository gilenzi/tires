const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/mysql-connect'); // this is the Sequelize instance now

const Brands = require('./brands');
const Height = require('./height');
const Width = require('./width');
const Radius = require('./radius');
const Type = require('./type');

class Tires extends Model {
  static async getAllTires() {
    try {
      return await Tires.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getTireById(id) {
    try {
      return await Tires.findByPk(id, {
        attributes: {
          exclude: [
            'brand_id',
            'height_id',
            'width_id',
            'radius_id',
            'type_id',
          ],
        },
        include: [
          {model: Brands, as: 'brand'},
          {model: Height, as: 'height'},
          {model: Width, as: 'width'},
          {model: Radius, as: 'radius'},
          {model: Type, as: 'type'},
        ],
      });
    } catch (error) {
      throw error;
    }
  }
}

Tires.init(
  {
    tire_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Brands,
        key: 'brand_id',
      },
    },
    height_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Height,
        key: 'height_id',
      },
    },
    width_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Width,
        key: 'width_id',
      },
    },
    radius_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Radius,
        key: 'radius_id',
      },
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Type,
        key: 'type_id',
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
    },
    image_url: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'tires',
    tableName: 'tires',
    timestamps: false,
  }
);

Tires.belongsTo(Brands, {foreignKey: 'brand_id'});
Tires.belongsTo(Height, {foreignKey: 'height_id'});
Tires.belongsTo(Width, {foreignKey: 'width_id'});
Tires.belongsTo(Radius, {foreignKey: 'radius_id', as: 'radius'}); // Fix alias here
Tires.belongsTo(Type, {foreignKey: 'type_id'});

module.exports = Tires;
