import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');
    }
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 4, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <form>
                    <TextField id="outlined-basic" label="email" variant="outlined" />
                    <TextField id="outlined-basic" label="password" variant="outlined" type='password' />
                    <Button onClick={handleLogin} variant="outlined" type='submit'>Submit</Button>
                </form>
            </Box>
        </div>
    )
}

export default Login