import React, { useState } from 'react';
import Button from '@mui/material/Button';

import CreateEvent from '../components/CreateEvent';

function Home() {
    const [isCreateEvent, setIsCreateEvent] = useState(false);

    const handleIsCreateEvent = () => {
        setIsCreateEvent(!isCreateEvent)
    }
    return (
        <div className='container'>
            <h1>Hello we are home</h1>
            <Button onClick={handleIsCreateEvent} variant="contained">Create Event</Button>
            
            {isCreateEvent && CreateEvent()}
        </div>
    )
}

export default Home
