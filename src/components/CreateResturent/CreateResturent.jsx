import React from 'react'
import Nav from '../Header/Nav'
import Footer from '../Footer/Footer'
import { Button, Container, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

function CreateResturent() {
  return (
    <>
    <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
    <Nav/>
    <Container>
    <div className="register" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div className="" style={{ width: "60%", textAlign: "center" }}>
              <p style={{ fontSize: "24px", color: "#464646", fontWeight: "500", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Create Restaurant</p>
              <TextField id="outlined-basic" label="Restaurant Name" required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <div className="" style={{ marginTop: "10px" ,display:"flex",gap:"40px"}}>
                <div className="logo-part" style={{}}>
                  <p style={{textAlign:"left",fontSize:"12px",color:"#464646"}}>Logo*</p>
                  <div className="" style={{width:"104px", marginTop: "5px" ,height:"94px",border:"1px solid #858585",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"}}><img src="/images/icons/photo icon.svg" alt="" /></div>
                </div>
                <div className="" style={{display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"end",gap:"10px"}}>
                  <p style={{textAlign:"left",fontSize:"12px",color:"#464646"}}>(File format: jpg,png)</p>
                  <Link to="/verifyaccount">
                <Button variant="contained" style={{ backgroundColor: "#CBE9E4", color: "#464646" ,width:"300px"}}>Add Logo <img src="/images/icons/photo icon.svg" alt="" /></Button>

              </Link>
                </div>
              </div>
              <TextField id="outlined-basic" label="Address" required variant="outlined" style={{ width: "100%", marginTop: "10px" }} />
              <Link to="/resturentinformation">
                <Button variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%" , marginTop: "10px"}}>Next</Button>

              </Link>
              </div>
              </div>
    </Container>
    <Footer/>
    </div>
    </>
  )
}

export default CreateResturent