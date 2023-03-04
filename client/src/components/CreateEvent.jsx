import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Box, Button, TextField } from '@mui/material';

function CreateEvent(props) {
    return (
        <div>
            <br />
            <h3>Generate QR code</h3>
            <Box>
                <br />
                <TextField id="outlined-basic" label="text" variant="outlined" />
            </Box>
            <br />
            <Button variant="contained">Generate</Button>
        </div>
    )

}

function generateQRCode(url) {
    return (
        <QRCode value={url} />
    )
}

export default CreateEvent;