import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import Nav from '../Header/Nav'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function ResetPassword() {
  return (
    <>
    <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
    <Nav/>
    <Container>
    <div className="register" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
    <div className="" style={{ width: "60%", textAlign: "center" }}>
              <p style={{ fontSize: "24px", color: "#464646", fontWeight: "500", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Reset Password</p>
              <TextField id="outlined-basic" label="Enter New Password" required variant="outlined" placeholder='*******' type="password" style={{ width: "100%", marginTop: "10px" }} />
              <TextField id="outlined-basic" label="Re-Enter Password" required variant="outlined" placeholder='*******' type="password"  style={{ width: "100%", marginTop: "10px" }} />
              <Link to="/forgetpassword">
                <Button variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%" ,marginBottom:"10px" ,marginTop:"10px"}}>Submit & Login</Button>

              </Link>
              </div>
              </div>
              </Container>
              <Footer/>
              </div>
    </>
  )
}

export default ResetPassword