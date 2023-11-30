import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleNext = async () => {
        // Basic email validation
        if (!email || !isValidEmail(email)) {
            setEmailError(true);
            return;
        }

        try {
            // Make an API call to reset the password
            const response = await axios.post('http://192.168.27.90:8000/user/password-reset/', { email });

            // Assuming the server responds with success message
            toast.success(response.data.message || 'Password reset email sent successfully');

            // Navigate to the reset password page
            navigate('/reset-password');
        } catch (error) {
            console.error('Error sending reset password email:', error);

            // Display error message using toast
            toast.error(error.response?.data?.message || 'Error sending reset password email');
        }
    };

    const isValidEmail = (value) => {
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    return (
        <>
            <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
                <Nav />
                <Container>
                    <div className="register" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <div className="" style={{ width: "60%", textAlign: "center" }}>
                            <p style={{ fontSize: "24px", color: "#464646", fontWeight: "500", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Please Enter Your Registered Email</p>
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                required
                                variant="outlined"
                                style={{ width: "100%", marginTop: "10px" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? 'Invalid email format' : ''}
                            />
                            <Button variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%", marginTop: "10px" }} onClick={handleNext}>
                                Next
                            </Button>
                            <p style={{ textAlign: "center", fontSize: "14px", fontWeight: "400", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Remember your password? <Link to="/" style={{ color: "#44A08D", textDecoration: "none" }}>Return to Login</Link></p>
                        </div>
                    </div>
                </Container>
                <Footer />
                <ToastContainer />
            </div>
        </>
    );
}

export default ForgetPassword;
