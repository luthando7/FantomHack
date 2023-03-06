import React from 'react';
import QRCode from 'qrcode.react';
import { Box, Button, TableRow, TextField } from '@mui/material';

function CheckEvents(props) {
    console.log('the props', props.events);
    const events = props.events;
    return (
        <div>
            <h3>These are your current events:</h3>
            <ul>
                {events.map(event => {
                    return(
                        <li key={event.id}>
                        {console.log('Checking event name', event.name)}
                        {console.log('Checking event venue', event.venue)}
                        <h3>{event.name}</h3>
                        <p>{event.venue}</p>
                        <Button variant="contained" color="success">See event</Button>
                    </li>
                    )
                })}
            </ul>
            <br />
        </div>
    )
}

export default CheckEvents;
