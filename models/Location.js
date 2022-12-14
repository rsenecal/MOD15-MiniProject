const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Location extends Model {}

Location.init(
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

    location_name: {
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
    modelName: "location",
  }
);

module.exports = Location;
