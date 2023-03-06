'use strict';

async function createEvent(req, res, next) {
    console.log('The params for creating the event', req.body);
    res.json({
        message: 'Event created'
    });
}

async function getEvents(req, res, next) {
    res.json({
        message: 'getting all events',
        events: [
            {
                id: 1,
                name: 'Standup comedy',
                venue: '16 Travel Road, Gotham City, c137'
            },
            {
                id: 2,
                name: 'Standup comedy 2',
                venue: '16 Travel Road, Gotham City, c137'
            },
            {
                id: 3,
                name: 'Standup comedy 3',
                venue: '7 Perfect Avenue, Starling City, zor el'
            }
        ]
    });
}

async function getSingleEvent(req, res, next) {
    res.json({
        message: 'getting a single event'
    });
}

module.exports = {
    createEvent,
    getEvents,
    getSingleEvent
};
