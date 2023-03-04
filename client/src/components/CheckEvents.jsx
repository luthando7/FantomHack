import React from 'react';
import QRCode from 'qrcode.react';
import { Box, Button, TableRow, TextField } from '@mui/material';

function CheckEvents(props) {
    return (
        <div>
            <br />
            <h3>These are your current events</h3>
            <Box>
                <br />
                <h4>Event 1</h4>
            </Box>
            <br />
            <Button variant="contained">See event</Button>
        </div>
    )

}

export default CheckEvents;
