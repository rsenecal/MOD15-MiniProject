const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveller, Trip } = require('../../models');

// Create a new trip
router.post('/', (req, res) => {});

// DELETE a trip by ID
router.delete('/:id', async (req, res) => {});

module.exports = router;
