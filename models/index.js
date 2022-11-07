const Location = require("./Location");
const Traveller = require("./Traveller");
const Trips = require("./Trips");

Location.belongsTo(Traveller, {
  foreignKey: "traveller_id",
  onDelete: "CASCADE",
});

Traveller.hasMany(Location, {
  foreignKey: "traveller_id",
  // onDelete: 'CASCADE',
});

// Trips.belongsTo(Locaion, {
//   foreignKey: "location_id",
//   onDelete: "CASCADE",
// });

Location.belongstoMany(Traveller, {
  through: Trips,
  foreignKey: "location_id",
  // onDelete: 'CASCADE',
});

Traveller.belongstoMany(Location, {
  through: Trips,
  foreignKey: "Traveller_id",
  // onDelete: 'CASCADE',
});

module.exports = {
  Location,
  traveller,
  Trips,
};
