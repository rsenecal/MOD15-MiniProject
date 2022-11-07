const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Traveller extends Model {}

Category.init(
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

    name: {
      // String
      // Doesn't allow null values
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      // String
      // Doesn't allow null values
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "traveller",
  }
);

module.exports = Traveller;
