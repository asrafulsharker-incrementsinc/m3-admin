// src/components/Login.js
import React, { useState } from 'react';
import { Button, Container, TextField } from "@mui/material";
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";
import { Link } from "react-router-dom";
import axios from 'axios';
// Correct import statement


function Login() {
    // const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://your-backend-api/login/', formData);
            console.log('Login successful:', response.data);

            history.push('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.response.data);
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
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            required
                            placeholder="****"
                            style={{ width: "100%", marginTop: "10px" }}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
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
        </div>
    );
}

export default Login;
