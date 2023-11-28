import { Container } from '@mui/material'
import React from 'react'
import Nav from '../Header/Nav'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function VerifyAccount() {
  return (
    <>
    <div className="" style={{display:"flex",flexDirection:"column",justifyContent:"space-between" ,height:"100vh"}}>
    <Nav/>
    <Container>
        <div className="" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
        <p style={{fontSize:"28px",fontWeight:"500",color:"#464646",marginBlockEnd:"1em"}}>Verify Account</p>
        <p style={{fontSize:"14px",marginBlockEnd:"1em",color:"#464646"}}>Please check your email. A verification link is sent to your email.</p>
        <p style={{fontSize:"14px",marginBlockEnd:"1em",color:"#464646"}}>Didn't get email? <Link to="/createresturent" style={{textDecoration:"none",color:"#44A08D"}}>Resend Email</Link></p>
        </div>
    </Container>
        <Footer/>
        </div>
    </>
  )
}

export default VerifyAccount