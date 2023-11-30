import React, { useState } from 'react';
import { Button, Container, IconButton, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ResetPassword() {
    const navigate = useNavigate();
    const { token } = useParams();
    console.log(token);

    const [formData, setFormData] = useState({
        new_password: '',
        new_password_confirm: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()~,.?":{}|<>]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { new_password, new_password_confirm } = formData;

        // Validate the new_password field
        if (!validatePassword(new_password)) {
            setPasswordError(
                'Password must be at least 8 characters, with one uppercase letter, one lowercase letter, and one special character'
            );
        } else {
            setPasswordError('');
        }

        // Validate the new_password_confirm field
        if (new_password !== new_password_confirm) {
            setPasswordMatchError("Passwords don't match");
        } else {
            setPasswordMatchError('');
        }

        // Check if there are any validation errors
        if (!passwordError && !passwordMatchError) {
            try {
                const url = `http://192.168.27.90:8000/user/password-conform/${token}/`;
                const response = await axios.post(url, formData);
                console.log(response.data);

                // Show success toast
                toast.success('Password reset successfully');

                // Add your logic after successful password reset
                navigate('/dashboard');
            } catch (error) {
                console.error('Error resetting password:', error);

                // Show error toast
                toast.error('Error resetting password. Please try again.');

                // Add your error handling logic here
            }
        }
    };

    return (
        <>
            <div className="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Nav />
                <Container>
                    <div className="register" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="" style={{ width: '60%', textAlign: 'center' }}>
                            <p style={{ fontSize: '24px', color: '#464646', fontWeight: '500', marginBlockStart: '1em', marginBlockEnd: '1em' }}>Reset Password</p>
                            <TextField
                                id="outlined-basic"
                                label="Enter New Password"
                                required
                                variant="outlined"
                                placeholder="*******"
                                type={showPassword ? 'text' : 'password'}
                                style={{ width: '100%', marginTop: '10px' }}
                                name="new_password"
                                value={formData.new_password}
                                onChange={handleChange}
                                error={!!passwordError}
                                helperText={passwordError}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    ),
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Re-Enter Password"
                                required
                                variant="outlined"
                                placeholder="*******"
                                type={showConfirmPassword ? 'text' : 'password'}
                                style={{ width: '100%', marginTop: '10px' }}
                                name="new_password_confirm"
                                value={formData.new_password_confirm}
                                onChange={handleChange}
                                error={!!passwordMatchError}
                                helperText={passwordMatchError}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end">
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    ),
                                }}
                            />
                            <Button variant="contained" style={{ backgroundColor: '#44A08D', color: '#FFFF', width: '100%', marginBottom: '10px', marginTop: '10px' }} onClick={handleSubmit}>
                                Submit & Login
                            </Button>
                        </div>
                    </div>
                </Container>
                <Footer />
                <ToastContainer />
            </div>
        </>
    );
}

export default ResetPassword;
