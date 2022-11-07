const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

// Trip.belongsTo(Traveller, {
//   foreignKey: "traveller_id",
//   onDelete: "CASCADE",
// });

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
  as: "planned_trips",
});

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false,
  },
  as: "location_travellers",
});

module.exports = {
  Location,
  Traveller,
  Trip,
};
