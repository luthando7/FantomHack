'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../api/event.controller');

router.get('/', controller.getEvents);
router.post('/create', controller.createEvent);
router.get('/event?id={id}', controller.getSingleEvent);

module.exports = router;
