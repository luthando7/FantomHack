'use strict';

const express = require('express');
const app = express();

const eventRoutes = require('./src/routes/events.routes');

const PORT = 3000;

app.use('/api/v1/events', eventRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
