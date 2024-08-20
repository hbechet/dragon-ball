const express = require('express');
const { getAllChars, getCharbyId } = require('../controllers/char.controller');

const routeChars = express.Router();

routeChars.get('/all', getAllChars);
routeChars.get('/:id', getCharbyId);

module.exports = routeChars;