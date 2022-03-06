const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'.env'})
const routes = require('./routes');

const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send("<h1>The</h1>")
});

app.listen(port, () => {
    console.info(`Running at the port: ${port}`);
});