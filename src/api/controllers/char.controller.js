const Character = require('../models/char.model');

const getAllChars = async (req, res) => {
    try {
        // http://localhost:3000/api/chars/all?pag=2&limit=10
        let limit = parseInt(req.query.limit);
        let pag = parseInt(req.query.pag);
        const numCharacters = await Character.countDocuments();

        limit = (isNaN(limit)) ? 10 : limit;
        pag = (isNaN(pag)) ? 1 : pag;

        if (limit > 10 || limit <= 0) limit = 5;

        let numPage = Math.ceil(numCharacters / limit);

        if (pag > numPage) {
            pag = numPage;
        } else if (pag < 1) {
            pag = 1;
        }

        const characters = await Character.find().skip((pag - 1) * limit).limit(limit);

        res.json({
            previousPage: (pag === 1) ? null : `/api/chars/all?pag=${pag - 1}&limit=${limit}`,
            nextPage: (numPage > pag) ? `/api/chars/all?pag=${pag + 1}&limit=${limit}` : null,
            quantityPage: characters.length,
            data: characters
        });

    } catch (error) {
        res.json(error);
    }

};

const getCharbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findById(id);
        res.json(character);
    } catch (error) {
        res.json(error);
    }
};


module.exports = { getAllChars, getCharbyId };