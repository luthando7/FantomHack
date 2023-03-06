'use strict';

const events = [
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
];

async function createEvent(req, res, next) {
    console.log('The params for creating the event', req.body);
    const name = req.body.title;
    const date = req.body.date;
    const address = req.body.address;

    const event = {
        id: events.length + 1,
        name: name,
        venue: address,
        date: date
    };
    events.push(event);
    res.json({
        message: 'Event created'
    });
}

async function getEvents(req, res, next) {
    res.json({
        message: 'getting all events',
        events: events
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
