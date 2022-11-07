const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveller, Trips } = require('../../models');

// GET all travellers
router.get('/', async (req, res) => {
  try {
    // find all travelllers
    const travellerData = await Traveller.findAll({
      include: [{ model: Location }, { model: Trips }],
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET a single traveller
router.get('/:id', async (req, res) => {
  try {
    // find a single traveller by its `id`
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Location }, { model: Trips }],
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new traveller
router.post('/', (req, res) => {});

// DELETE a traveller by ID
router.delete('/:id', async (req, res) => {
  try {
    // delete one traveller by its `id` value
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
