import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Box, Button, TextField } from '@mui/material';

import { createEvent } from '../services/events.service';

function CreateEvent(props) {

    function handleSubmit() {
        event.preventDefault()
        console.log('Submitting event with the following details', props.title, props.date, props.address);
        createEvent(props.title, props.date, props.address)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 4, width: '35ch' },
                }}
                noValidate
                autoComplete="off">
                <div>
                    <label htmlFor="title">Event Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={props.title}
                        onChange={event => props.setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="date">Event Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={props.date}
                        onChange={event => props.setDate(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="address">Venue Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={props.address}
                        onChange={event => props.setAddress(event.target.value)}
                    />
                </div>
            </Box>

            <Button type='submit' variant="contained">Create</Button>
        </form>
    )

}

function generateQRCode(url) {
    return (
        <QRCode value={url} />
    )
}

export default CreateEvent;