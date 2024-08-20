const express = require('express');
const { getAllChars } = require('../controllers/char.controller');

const routeChars = express.Router();

routeChars.get('/all', getAllChars);

module.exports = routeChars;