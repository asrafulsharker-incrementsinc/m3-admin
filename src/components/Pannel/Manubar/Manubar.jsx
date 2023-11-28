import React from 'react'
import ResturentInformationPannel from '../ResturentInpormationPannel/ResturentInformationPannel'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import FlipToFrontOutlinedIcon from '@mui/icons-material/FlipToFrontOutlined';
import ResetTvOutlinedIcon from '@mui/icons-material/ResetTvOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import FloodOutlinedIcon from '@mui/icons-material/FloodOutlined';
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, NavLink } from "react-router-dom"
import './MenuBar.css'

function Manubar() {
  return (
    <>
      <div className="n" style={{ width: "18%", backgroundColor: "#FFFF", padding: "10px" }}>
        <ResturentInformationPannel />
        <div className="" style={{ display: "flex", flexDirection: "column" }}>
          <div className="" style={{ width: "100%", height: "1px", backgroundColor: "#708E88", marginTop: "20px", marginBottom: "15px" }}></div>


         
          <NavLink to="/dashboard" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }} >
            <div className="button" style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
              <SpaceDashboardOutlinedIcon />
              <p style={{ fontSize: '18px', marginLeft: '10px' }}>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/orders" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }} >
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px", flexGrow: "0" }}>
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              <FlipToFrontOutlinedIcon />
              <p style={{ fontSize: "18px", marginLeft: "10px" }}>Orders</p>
            </div>

            <p style={{ backgroundColor: "#44a08d", borderRadius: "50% ", padding: "3px", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "auto" }}>10</p>
          </div>
          </NavLink>



          
          <p style={{ fontSize: "15px", marginTop: "10px" }}>Reservation</p>
          <div className="" style={{ backgroundColor: "#44a08d", width: "100%", height: "1px", marginBottom: "10px" }}></div>
          <NavLink to="/reservation" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <ResetTvOutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>Reservation</p>
          </div>
          </NavLink>
          
          <NavLink to="/table" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <BackupTableOutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>Table</p>
          </div>
          </NavLink>
          
          <NavLink to="/floor" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <FloodOutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>Floor</p>
          </div>
          </NavLink>
         

          <p style={{ fontSize: "15px", marginTop: "10px" }}>Profile</p>
          <div className="" style={{ backgroundColor: "#44a08d", width: "100%", height: "1px", marginBottom: "10px" }}></div>

          <NavLink to="/resturent" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <DataThresholdingOutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>Resturent</p>
          </div>
          </NavLink>
          
          <NavLink to="/branch" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <AddBusinessOutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>Branch</p>
          </div>
          </NavLink>
          

          <NavLink to="/profile" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <Person2OutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>Profile</p>
          </div>
          </NavLink>
       

          <p style={{ fontSize: "15px", marginTop: "10px" }}>Essentials</p>
          <div className="" style={{ backgroundColor: "#44a08d", width: "100%", height: "1px", marginBottom: "10px" }}></div>
          <NavLink to="/qr" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <QrCodeScannerOutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>QR Code</p>
          </div>
          </NavLink>
          
          <NavLink to="/settings" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <SettingsOutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>Settings</p>
          </div>
          </NavLink>
        

          <p style={{ fontSize: "15px", marginTop: "10px" }}>Warnning</p>
          <div className="" style={{ backgroundColor: "#44a08d", width: "100%", height: "1px", marginBottom: "10px" }}></div>

          <NavLink to="/logout" exact style={{ textDecoration: 'none', cursor: 'pointer',borderRadius:"5px",color:"#464646",fontSize:"16px" }}>
          <div className="button" style={{ display: "flex", alignItems: "center", padding: "8px" }}>
            <LogoutOutlinedIcon />
            <p style={{ fontSize: "18px", marginLeft: "10px" }}>Logout</p>
          </div>
          </NavLink>
         

        </div>
      </div>
    </>
  )
}

export default Manubar