import React, { useState } from 'react';
import { Button, Container, TextField, IconButton, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.27.211:8000/user/login/', formData);
            console.log('Login successful:', response.data);

            // Show success toast
            toast.success('Login successful');

            // Assuming you have the 'history' object available
            // history.push('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.response.data);

            // Show error toast
            toast.error('Login failed. Please check your credentials.');
        }
    };

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Nav />

            <Container>
                <div className="login" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="login-left-part">
                        <p style={{ fontWeight: "400", fontSize: "48px", textAlign: "center", color: "#44A08D", lineHeight: "normal", padding: "0px" }}>Welcome back!</p>
                        <p style={{ textAlign: "center", fontSize: "14px", opacity: "0.8", marginBottom: "48px", color: "#464646" }}>Customize your Customer’s cravings with Cost Efficient Smarter Menus</p>
                        <img src="/images/auth/amico.png" alt="" />
                    </div>
                    <div className="login-right-part">
                        <p style={{ textAlign: "center", fontSize: "28px", fontWeight: "800", fontStyle: "normal", color: "#464646" }}>Login</p>
                        <TextField
                            id="outlined-basic"
                            label="Email/Phone Number"
                            placeholder="Enter your email/phone number"
                            required
                            variant="outlined"
                            style={{ width: "100%" }}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            variant="outlined"
                            required
                            placeholder="****"
                            style={{ width: "100%", marginTop: "10px" }}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePassword} edge="end">
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <p style={{ fontSize: "12px", fontWeight: "400", marginBlockStart: "1em", marginBlockEnd: "1em" }}>
                            Forget Password? <a href="#" style={{ color: "#44A08D" }}>Click here</a>
                        </p>
                        <Button onClick={handleLogin} variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%" }}>Login</Button>
                        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: "400", marginBlockStart: "1em", marginBlockEnd: "1em" }}>
                            Don't have an account? <Link to="/register" style={{ color: "#44A08D", textDecoration: "none" }}>Sign Up Now</Link>
                        </p>
                    </div>
                </div>
            </Container>

            <Footer />

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
}

export default Login;
