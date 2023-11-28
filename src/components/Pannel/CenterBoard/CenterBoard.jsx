import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import AddCardIcon from '@mui/icons-material/AddCard';
import Chart2 from '../Chart/Chart2'
import Chart1 from '../Chart/Chart1'


function CenterBoard() {
    return (
        <>

            <div className="" style={{ width: "59%" ,marginTop:"20px"}}>
                <div className="center-nav" style={{ backgroundColor: "#FFFF", height: "75px" }}>
                    <div style={{ backgroundColor: "#FFFF", padding: "5px", borderRadius: "5px", display: "flex", justifyContent: "flex-end", boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.16)" }}>
                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <InputLabel id="branch-label">Select Branch</InputLabel>
                            <Select
                                labelId="branch-label"
                                id="branch-select"
                                label="Branch"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Sultan Dine - Savar</MenuItem>
                                <MenuItem value={20}>Sultan Dine - Dhanmondi</MenuItem>
                                <MenuItem value={30}>Sultan Dine - Narayongonj</MenuItem>
                                <MenuItem value={40}>Sultan Dine - Farmgate</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#44a08d", borderRadius: "5px", color: "#FFFF" }}>
                            <InputLabel id="month-label" style={{ color: "#FFFF" }}>January</InputLabel>
                            <Select
                                labelId="month-label"
                                id="month-select"
                                label="Month"
                                style={{ color: "#FFFF" }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>January</MenuItem>
                                <MenuItem value={2}>February</MenuItem>
                                {/* Add other months as needed */}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#44a08d", borderRadius: "5px" }}>
                            <InputLabel id="year-label" style={{ color: "#FFFF" }}>2023</InputLabel>
                            <Select
                                labelId="year-label"
                                id="year-select"
                                label="Year"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={2022}>2022</MenuItem>
                                <MenuItem value={2023}>2023</MenuItem>
                                {/* Add other years as needed */}
                            </Select>
                        </FormControl>
                    </div>

                    <div className="boxOrderBAdge" style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
                        <div className="boxBadge" style={{ backgroundColor: "#F4EBFF", padding: "24px 32px", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                            <div className="semiboxBadge" style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#76648E" }}>
                                <AddCardIcon style={{ fontSize: "25px" }} />
                                <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Total Revinew</p>
                            </div>
                            <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "8px", color: "#76648E" }}>$ 1305K</p>
                        </div>
                        <div className="boxBadge" style={{ backgroundColor: "#E7F8FF", padding: "24px 32px", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                            <div className="semiboxBadge" style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#76648E" }}>
                                <AddCardIcon style={{ fontSize: "25px" }} />
                                <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Total Scan</p>
                            </div>
                            <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "8px", color: "#76648E" }}>$ 1305K</p>
                        </div>
                        <div className="boxBadge" style={{ backgroundColor: "#FFEFEA", padding: "24px 32px", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                            <div className="semiboxBadge" style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#76648E" }}>
                                <AddCardIcon style={{ fontSize: "25px" }} />
                                <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Total Order</p>
                            </div>
                            <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "8px", color: "#76648E" }}>$ 1305K</p>
                        </div>
                        <div className="boxBadge" style={{ backgroundColor: "#E9F2FF", marginRight: "5px", padding: "24px 32px", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                            <div className="semiboxBadge" style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "#76648E" }}>
                                <AddCardIcon style={{ fontSize: "25px" }} />
                                <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Total Menu</p>
                            </div>
                            <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "8px", color: "#76648E" }}>$ 1305K</p>
                        </div>
                    </div>

                    {/* at a glance  */}

                    <div className="" style={{backgroundColor:"#FFFF",borderRadius:"16px",padding:"24px",marginTop:"20px"}}>
                        <p style={{fontSize:"20px",fontWeight:"700",color:"#464646",marginBottom:"20px"}}>At a Glance</p>
                        <div className="graph" style={{display:"flex",gap:"10px"}}>
                            <div className="" style={{  height: '300px', border: "1px solid #DDD", borderRadius: "5px", flexGrow: "1", marginLeft: "5px" }}>
                                <Chart2/>
                            </div>
                            <div className="" style={{  height: '300px', border: "1px solid #DDD", borderRadius: "5px", flexGrow: "1", marginLeft: "5px" }}>
                                <Chart1/>
                            </div>
                        </div>


                    </div>

                    {/* order rate  */}
                    <div className="" style={{backgroundColor:"#FFFF",borderRadius:"16px",padding:"24px",marginTop:"20px"}}>
                        <p style={{fontSize:"20px",fontWeight:"700",color:"#464646",marginBottom:"20px"}}>Order Rate</p>
                        <div className="graph" style={{display:"flex",gap:"10px"}}>
                            <div className="" style={{  height: '300px', border: "1px solid #DDD", borderRadius: "5px", flexGrow: "1", marginLeft: "5px" }}>
                                <Chart2/>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </>
    )
}

export default CenterBoard