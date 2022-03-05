const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'.env'})
const routes = require('./routes');

const port = process.env.PORT || 3000

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.info(`Running at the port: ${port}`);
});