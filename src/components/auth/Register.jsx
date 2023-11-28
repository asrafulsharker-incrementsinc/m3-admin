// src/components/Register.js
import React, { useState } from 'react';
import { Button, Checkbox, Container, IconButton, TextField, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password1: '',
    password2: '',
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Validate email format
    if (e.target.name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValidEmail(emailRegex.test(e.target.value));
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleConfirmPasswordBlur = () => {
    setPasswordMismatch(formData.password1 !== formData.password2);
  };

  const isPasswordValid = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(formData.password1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for email format, password match, and terms agreement before submitting
    if (!validEmail || passwordMismatch || !formData.agreeTerms || !isPasswordValid()) {
      // Handle validation errors (e.g., display an error message)
      return;
    }

    try {
      const response = await axios.post('http://192.168.27.211:8000/user/register/', formData);
      console.log(response.data);

      // Use navigate instead of history.push for redirection
      navigate('/verifyaccount');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration failure (e.g., display an error message)
    }
  };

  return (
      <>
        <Nav />
        <div className="register" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ width: '60%', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', color: '#464646', fontWeight: '500', marginBlockStart: '1em', marginBlockEnd: '1em' }}>Create Account</p>
            <p style={{ fontSize: '14px', color: '#464646', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
              Create an account to start using Make my menu service and enjoy all the benefits.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <TextField
                  id="outlined-basic"
                  label="First Name"
                  placeholder="e.g. John"
                  required
                  variant="outlined"
                  style={{ width: '100%' }}
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
              />
              <TextField
                  id="outlined-basic"
                  label="Last Name"
                  required
                  variant="outlined"
                  placeholder="e.g. Doe"
                  style={{ width: '100%' }}
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
              />
            </div>
            <TextField
                id="outlined-basic"
                label="Enter your email"
                placeholder="e.g. username@mail.com"
                required
                variant="outlined"
                style={{ width: '100%', marginTop: '10px' }}
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!validEmail}
                helperText={validEmail ? '' : 'Invalid email format'}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                variant="outlined"
                placeholder="***********"
                required
                style={{ width: '100%', marginTop: '10px' }}
                name="password1"
                value={formData.password1}
                onChange={handleChange}
                error={!isPasswordValid()}
                helperText={!isPasswordValid() ? 'Password must be at least 8 characters, with one uppercase letter, one lowercase letter, and one special character' : ''}
                InputProps={{
                  endAdornment: (
                      <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                  ),
                }}
            />
            <TextField
                id="outlined-password-input"
                label="Re-Enter Password"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="current-password"
                variant="outlined"
                placeholder="***********"
                required
                style={{ width: '100%', marginTop: '10px' }}
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                onBlur={handleConfirmPasswordBlur}
                error={passwordMismatch || !isPasswordValid()}
                helperText={
                  passwordMismatch ? "Passwords don't match" : !isPasswordValid()
                      ? 'Password must be at least 8 characters, with one uppercase letter, one lowercase letter, and one special character'
                      : ''
                }
                InputProps={{
                  endAdornment: (
                      <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end">
                        {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                  ),
                }}
            />
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', marginTop: '10px' }}>
              <FormControlLabel
                  control={
                    <Checkbox
                        style={{ color: '#44A08D' }}
                        checked={formData.agreeTerms}
                        onChange={handleCheckboxChange}
                        name="agreeTerms"
                    />
                  }
                  label={
                    <p>
                      I agree to all the{' '}
                      <a href="" style={{ color: '#44A08D', textDecoration: 'none' }}>
                        Terms & Condition
                      </a>
                    </p>
                  }
              />
            </div>
            <Button type="submit" onClick={handleSubmit} variant="contained" style={{ backgroundColor: '#44A08D', color: '#FFFF', width: '100%', marginTop: '10px' }}>
              Next
            </Button>
            <p style={{ textAlign: 'center', fontSize: '14px', fontWeight: '400', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
              Already have an account?{' '}
              <Link to="/" style={{ color: '#44A08D', textDecoration: 'none' }}>
                Login
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </>
  );
}

export default Register;
