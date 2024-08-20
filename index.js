const express = require('express');
const { connectDB } = require('./src/utils/db')
const routeChars = require('./src/api/routes/char.routes');
const cors = require('cors');

const env = require('dotenv')
env.config();

connectDB();
const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());
server.use('/api/chars', routeChars);

server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT}`);
})