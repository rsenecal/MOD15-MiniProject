const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveller, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {});

// GET a single location
router.get('/:id', async (req, res) => {});

// Create a new location
router.post('/', (req, res) => {});

// DELETE a location by ID
router.delete('/:id', async (req, res) => {});

module.exports = router;
