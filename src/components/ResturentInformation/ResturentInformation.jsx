import { Button, Checkbox, Container, TextField } from '@mui/material'
import React from 'react'
import Nav from '../Header/Nav'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function ResturentInformation() {
  return (
    <>
     <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
    <Nav/>
    <Container>
    <div className="register" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
    <div className="" style={{ width: "60%", textAlign: "center" }}>
              <p style={{ fontSize: "24px", color: "#464646", fontWeight: "500", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Restaurant Information</p>
              <p style={{ fontSize: "14px", color: "#464646", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Please enter all the information to create restaurant</p>
              <TextField id="outlined-basic" label="Contact Number" placeholder='e.g. +880123456789' required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <TextField id="outlined-basic" label="Email" placeholder='e.g. branch@mail.com' required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <TextField id="outlined-basic" label="BIN Number" placeholder='e.g. 0001251245-0101' required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <TextField id="outlined-basic" label="Branch Name" placeholder='e.g. Uttara' required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <TextField id="outlined-basic" label="Restaurant Name" required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <p style={{ fontSize: "14px", color: "#464646", marginBlockStart: "1em", marginBlockEnd: "1em" }}>A main branch will be created using this name. (format: “Restaurant Name - Branch Name”)</p>

              <TextField id="outlined-basic" label="Branch Manager Email" placeholder='e.g. manager@mail.com' required variant="outlined" style={{ width: "100%" }} />
              <div className="" style={{ display: "flex", alignItems: "center", fontSize:"14px"}}>  <Checkbox style={{color:"#44A08D"}}  /><p>I am the manager of this branch</p></div>

              <Link to="/forgetpassword">
                <Button variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%" ,marginBottom:"10px"}}>Create & Login</Button>

              </Link>
              </div>

    </div>
    </Container>
    <Footer/>

    </div>
    </>
    )
}

export default ResturentInformation