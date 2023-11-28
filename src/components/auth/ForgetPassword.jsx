import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import Nav from '../Header/Nav'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (
<>
<div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
    <Nav/>
    <Container>
    <div className="register" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
    <div className="" style={{ width: "60%", textAlign: "center" }}>
              <p style={{ fontSize: "24px", color: "#464646", fontWeight: "500", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Please Enter Your Registered Email</p>
              <TextField id="outlined-basic" label="Email" required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <Link to="/resetpassword">
                <Button variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%" , marginTop: "10px"}}>Next</Button>

              </Link>
              <p style={{ textAlign: "center", fontSize: "14px", fontWeight: "400", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Remember your password? <Link to="/" style={{ color: "#44A08D" ,textDecoration:"none"}}>Return to Login</Link></p>


              </div>
              </div>
              </Container>
              <Footer/>
              </div>
</>  
)
}

export default ForgetPassword