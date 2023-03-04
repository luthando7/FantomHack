import React, { useState } from 'react';
import Button from '@mui/material/Button';

import CreateEvent from '../components/CreateEvent';
import CheckEvents from '../components/CheckEvents';

function Home() {
    const [isCreateEvent, setIsCreateEvent] = useState(false);
    const [isCheckEvents, setIsCheckEvents] = useState(false)

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
            {isCreateEvent && CreateEvent(isCreateEvent)}
            <br />
            <Button onClick={handleIsCheckEvents} variant="contained">Check Events</Button>
            
            {isCheckEvents && CheckEvents()}
        </div>
    )
}

export default Home
