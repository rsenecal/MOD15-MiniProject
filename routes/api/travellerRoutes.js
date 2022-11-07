const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveller, Trips } = require('../../models');

// GET all travellers
router.get('/', async (req, res) => {});

// GET a single traveller
router.get('/:id', async (req, res) => {});

// Create a new traveller
router.post('/', (req, res) => {});

// DELETE a traveller by ID
router.delete('/:id', async (req, res) => {});
module.exports = router;
