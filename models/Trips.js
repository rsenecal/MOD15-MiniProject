// import important parts of sequelize library
const { Model, DataTypes, NUMBER } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Trips extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      // integer
      // Doesn't allow null values
      // Set as primary key
      // Uses auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    trip_budget: {
      // Decimal
      // Doesn't allow null values
      // Validates that the value is a decimal
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    traveller_amount: {
      // Integer
      // Doesn't allow null values
      // Set a default value of 10
      // Validates that the value is numeric
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "traveller",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trips",
  }
);

module.exports = Product;
