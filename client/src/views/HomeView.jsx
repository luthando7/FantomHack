import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import CreateEvent from '../components/CreateEvent';
import CheckEvents from '../components/CheckEvents';

import { getAllEvents } from '../services/events.service';

function Home() {
    const [isCreateEvent, setIsCreateEvent] = useState(false);
    const [isCheckEvents, setIsCheckEvents] = useState(false)
    const [isGetEvents, setGetEvents] = useState(true)
    const [eventsData, setEventsData] = useState([]);

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        if (isGetEvents) {
            getAllEvents().then(data => {
                setEventsData(data);
                setGetEvents(false)
            })
        }
    })

    const handleIsCreateEvent = () => {
        setIsCreateEvent(!isCreateEvent)
        setIsCheckEvents(false);
    }

    const handleIsCheckEvents = () => {
        setIsCheckEvents(!isCheckEvents)
        setIsCreateEvent(false)
    }

    return (
        <div className='container'>
            <h1>Hello we are home</h1>
            <Button onClick={handleIsCreateEvent} variant="contained">Create Event</Button>
            <br />
            {isCreateEvent && CreateEvent({title, setTitle, date, setDate, address, setAddress})}
            <br />
            <Button onClick={handleIsCheckEvents} variant="contained">Check Events</Button>

            {isCheckEvents && CheckEvents(eventsData)}
        </div>
    )
}

export default Home
