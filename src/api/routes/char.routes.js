const express = require('express');
const { getAllChars, getCharbyId, updateCharbyId } = require('../controllers/char.controller');

const routeChars = express.Router();

routeChars.get('/all', getAllChars);
routeChars.get('/:id', getCharbyId);
routeChars.put('/:id', updateCharbyId);

module.exports = routeChars;