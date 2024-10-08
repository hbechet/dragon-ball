const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charSchema = new Schema({
    name: { type: String, require: true, unique: true },
    planet: { type: String },
    image: { type: String },
    ki: { type: Number }
},
    {
        collection: 'characters',
        timestamps: true // createdAt + updatedAt
    }
);

const Character = mongoose.model('characters', charSchema);
module.exports = Character;