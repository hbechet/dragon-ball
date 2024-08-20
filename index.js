const express = require('express');
const { connectDB } = require('./src/utils/db')
const routeChars = require('./src/api/routes/char.routes');

const env = require('dotenv')
env.config();

// const cloudinary = require('cloudinary').v2;
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

connectDB();
const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use('/api/chars', routeChars);

server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT}`);
})