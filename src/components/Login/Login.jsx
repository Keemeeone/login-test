import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';
import { IoLockClosedOutline } from 'react-icons/io5';
import { TextField, InputAdornment, Container, Button, Box, Alert, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import {
    containerStyle,
    imageStyle,
    inputContainerStyle,
    inputStyle,
    loginButtonStyle,
    forgotPasswordStyle,
} from './LoginStyles';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const handleLogin = () => {
        if (username === 'test@luxpmsoft.com' && password === 'test1234!') {
            window.location.href = 'https://keemeeone.github.io/';
        } else if (!username || !password) {
            setErrorMessage('Both a username and a password must be provided!');
        } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])\S+$/.test(password)) {
            setErrorMessage("Wrong combination password!");
            setOpenDialog(true);  // Open the dialog for incorrect password
        } else {
            setOpenDialog(true);  // Open the dialog for any other login error
        }
    };

    const handleForgot = () => {
        console.log('Forgot password clicked');
        alert("Forgot password clicked");
    };

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <Container style={containerStyle}>
            <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Col xs={12} sm={8} md={6} lg={3}>
                    <img src="./cart.svg" alt="cart" style={imageStyle} />
                    <Box>
                        <Box style={inputContainerStyle}>
                            <TextField
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="USERNAME"
                                onKeyPress={handleOnKeyPress}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FiUser style={{ color: '#FFFFFF' }} />
                                        </InputAdornment>
                                    ),
                                    style: inputStyle,
                                }}
                                variant="outlined"
                                fullWidth
                                sx={{
                                    ' .MuiOutlinedInput-root': inputStyle,
                                }}
                            />
                            <TextField
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="PASSWORD"
                                onKeyPress={handleOnKeyPress}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IoLockClosedOutline style={{ color: '#FFFFFF' }} />
                                        </InputAdornment>
                                    ),
                                    style: inputStyle,
                                }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                sx={{
                                    ' .MuiOutlinedInput-root': inputStyle,
                                }}
                            />
                        </Box>
                        {errorMessage && (
                            <Alert severity="warning" onClose={() => { setErrorMessage('') }} style={{ position: 'relative' }}>
                                {errorMessage}
                            </Alert>
                        )}
                        <Button variant="contained" onClick={handleLogin} style={loginButtonStyle}>
                            Login
                        </Button>
                    </Box>
                    <Box style={forgotPasswordStyle}>
                        <Button style={{ color: '#FFF' }} onClick={handleForgot}>
                            Forgot password?
                        </Button>
                    </Box>
                </Col>
            </Row>

            {/* Dialog for displaying error message */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Try Again!</DialogTitle>
                <DialogContent>
                    <Typography>The provided username or password is wrong!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>OK</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Login;
