const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Trip.belongsTo(Traveller, {
  foreignKey: "traveller_id",
  onDelete: "CASCADE",
});

Traveller.hasMany(Trip, {
  foreignKey: "traveller_id",
  // onDelete: 'CASCADE',
});

Trip.belongsTo(Location, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

Location.hasMany(Trip, {
  foreignKey: "location_id",
  // onDelete: 'CASCADE',
});

module.exports = {
  Location,
  Traveller,
  Trip,
};
