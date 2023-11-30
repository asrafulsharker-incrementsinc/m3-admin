import { Container } from '@mui/material';
import React from 'react';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios'; // Import axios

function VerifyAccount() {
    const handleResendEmail = async () => {
        try {
            // Retrieve user_id from local storage
            const userId = localStorage.getItem('user_id');

            if (userId) {
                // Call the resend email API endpoint with the user_id
                const response = await axios.get('http://192.168.27.90:8000/user/resend-email/', {
                    params: {
                        id: userId,
                    }});

                // Handle the response data as needed, e.g., show a success message
                console.log('Resend email successful:', response.data);
            } else {
                // Handle the case where user_id is not found in local storage
                console.error('User ID not found in local storage');
            }
        } catch (error) {
            // Handle errors from the resend email API endpoint
            console.error('Error resending verification email:', error);
            // Display an error message or update the UI accordingly
        }
    };

    return (
        <>
            <div className="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Nav />
                <Container>
                    <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <p style={{ fontSize: '28px', fontWeight: '500', color: '#464646', marginBlockEnd: '1em' }}>Verify Account</p>
                        <p style={{ fontSize: '14px', marginBlockEnd: '1em', color: '#464646' }}>Please check your email. A verification link is sent to your email.</p>
                        <p style={{ fontSize: '14px', marginBlockEnd: '1em', color: '#464646' }}>
                            Didn't get email?{' '}
                            <span  onClick={handleResendEmail} style={{ textDecoration: 'none', color: '#44A08D',cursor:'pointer' }}>
                                Resend Email
                            </span>
                        </p>
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    );
}

export default VerifyAccount;
