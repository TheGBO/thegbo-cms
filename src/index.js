const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'.env'})
const routes = require('./routes');
const path = require('path');

const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/', express.static(path.join(__dirname,'public')))

app.listen(port, () => {
    console.info(`Running at the port: ${port}`);
});