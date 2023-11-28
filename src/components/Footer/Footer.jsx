import { Container } from '@mui/material'

function Footer() {
  return (
    <>
    <div className="footer" style={{fontSize:"14px",color:"#FFFF", bottom:"0"}}>
    <Container>
        <div className="" style={{display:'flex',flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
            <p>Copyright ©2023 All rights reserved    |    Proudly designed and developed by  </p>
            <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"16px"}}>
                <a href="" style={{textDecoration:"none", color:"#FFFF"}}>Contact Us</a>
                <a href=""><img src="/images/icons/Facebook_f_logo_(2021) 1.svg" alt="" /></a>
                <a href=""><img src="/images/icons/Instagram_logo_2016 1.svg" alt="" /></a>
                <a href=""><img src="/images/icons/LinkedIn_icon 1.svg" alt="" /></a>
            </div>
        </div>
    </Container>
    </div>
    
    </>
  )
}

export default Footer