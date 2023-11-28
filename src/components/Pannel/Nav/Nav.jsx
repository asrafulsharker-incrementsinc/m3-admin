import { Button, Container } from '@mui/material'
import React from 'react'

function Nav() {
  return (
        <>
       <div className="" style={{background:"#FFFF",borderBottom:"1px solid #708E88"}}>
       <Container className="navbar"  maxWidth="xl">
                <div className="logo " style={{ marginTop: "15px" ,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    
                    <img src="/images/M3 Logo.svg" alt="logo"  style={{padding:"5px"}}/>

                    <div className=" " style={{display:"flex", alignItems:"center",justifyContent:'center',gap:"10px"}}>
                        <Button><img src="/images/icons/notifications.svg" alt="" /></Button>
                        <Button><img src="/images/icons/logout.png" alt="" /></Button>
                        <Button><img src="/images/additional image/RestaurantLogo.jpg" alt="" /></Button>
                    </div>
                
                
                </div>
            </Container>  
       </div>
        </>
            
            )
}

export default Nav