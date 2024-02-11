/**
 * Login Component
 * 
 * This component represents the login form for the webpage.
 * If the login credentials are incorrect, an error message is displayed.
 * 
 * @file Login.jsx
 * @author Heewon Kim
 */

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { TextField, InputAdornment, Container, Button, Box, Alert } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { IoLockClosedOutline } from 'react-icons/io5';
import {
    containerStyle,
    imageStyle,
    inputContainerStyle,
    inputStyle,
    loginButtonStyle,
    forgotPasswordStyle,
} from './LoginStyles';

const Login = () => {
    // State variables for managing username, password, error message, and alert visibility
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //  Handles the login process. 
    const handleLogin = () => {
        if (username === 'test@luxpmsoft.com' && password === 'test1234!') {
            window.location.href = 'https://keemeeone.github.io/';
        } else if (!username || !password) {
            setErrorMessage('Both a username and a password must be provided!');
        } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])\S+$/.test(password)) {
            setErrorMessage("Wrong combination password!");
        } else {
            alert("The provided username or password is wrong!");
        }
    };

    //  Handles the "Forgot Password" action.
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
        // Login component layout
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
                            <Alert severity="warning" onClose={() => { setErrorMessage('') }}>
                                {errorMessage}
                            </Alert>
                        )}
                        <Button variant="contained" onClick={handleLogin} style={loginButtonStyle}>
                            Login
                        </Button>
                    </Box>
                    <Box>
                        <h6 style={forgotPasswordStyle} onClick={handleForgot}>
                            <span style={{ cursor: 'pointer' }}>
                                Forgot password?
                            </span>
                        </h6>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
