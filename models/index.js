const Location = require("./Location");
const Traveller = require("./Traveller");
const Trips = require("./Trips");

Trips.belongsTo(Traveller, {
  foreignKey: "traveller_id",
  onDelete: "CASCADE",
});

Traveller.hasMany(Trips, {
  foreignKey: "traveller_id",
  // onDelete: 'CASCADE',
});

Trips.belongsTo(Locaion, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

Location.hasMany(Trips, {
  foreignKey: "location_id",
  // onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
