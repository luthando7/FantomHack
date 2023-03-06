'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const eventRoutes = require('./src/routes/events.routes');

const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1/events', eventRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
