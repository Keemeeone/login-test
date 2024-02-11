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
import { Alert, Row, Col } from 'react-bootstrap';
import { TextField, InputAdornment, Container, Button, Box } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { IoLockClosedOutline } from 'react-icons/io5';
import {
    containerStyle,
    imageStyle,
    inputContainerStyle,
    inputStyle,
    alertBoxStyle,
    loginButtonStyle,
    forgotPasswordStyle,
} from './LoginStyles';

const Login = () => {
    // State variables for managing username, password, error message, and alert visibility
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = useState(false);

    //  Handles the login process. 
    const handleLogin = () => {
        if (username === 'test@luxpmsoft.com' && password === 'test1234!') {
            window.location.href = '/dashboard';
        } else {
            setShow(true);
        }
    };

    //  Handles the change in the password input field.
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9!@#$%^&*()_+]+$/.test(value) || value === '') {
            setPassword(value);
            setErrorMessage('');
        } else {
            setErrorMessage('Wrong Combination!');
        }
    };

    //  Handles the "Forgot Password" action.
    const handleForgot = () => {
        console.log('Forgot password clicked');
    };

    return (
        // Login component layout
        <Container style={containerStyle}>
            <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Col xs={12} sm={8} md={6} lg={3}>
                    <img src="./cart.svg" alt="cart" style={imageStyle} />
                    <Box style={inputContainerStyle}>
                        <TextField
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="USERNAME"
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
                            onChange={handlePasswordChange}
                            placeholder="PASSWORD"
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
                    <Box style={alertBoxStyle}>
                        {show && (
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                The provided Password is wrong!
                            </Alert>
                        )}
                    </Box>
                    {errorMessage && (
                        <Alert variant="danger">
                            {errorMessage}
                        </Alert>
                    )}
                    <Button variant="contained" onClick={handleLogin} style={loginButtonStyle}>
                        Login
                    </Button>
                    <Box>
                        <h6 style={forgotPasswordStyle} onClick={handleForgot}>
                            Forgot password?
                        </h6>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
