import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';

function CreateResturent() {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    logo: null, // You may need to handle file uploads, and this may need to be a FormData object
    address: '',
  });

  const handleChange = (e) => {
    setRestaurantData({
      ...restaurantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogoChange = (e) => {
    // Handle file upload for the logo
    const file = e.target.files[0];
    setRestaurantData({
      ...restaurantData,
      logo: file,
    });
  };

  const handleCreateRestaurant = async () => {
    try {
      const formData = new FormData();
      formData.append('name', restaurantData.name);
      formData.append('logo', restaurantData.logo);
      formData.append('address', restaurantData.address);

      const response = await axios.post('http://192.168.27.211:8000/rest/restaurant/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Restaurant created successfully:', response.data);

      // Redirect or perform other actions after successful restaurant creation
    } catch (error) {
      console.error('Restaurant creation failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
      <>
        <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
          <Nav />
          <Container>
            <div className="register" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
              <div className="" style={{ width: "60%", textAlign: "center" }}>
                <p style={{ fontSize: "24px", color: "#464646", fontWeight: "500", marginBlockStart: "1em", marginBlockEnd: "1em" }}>Create Restaurant</p>
                <TextField
                    id="outlined-basic"
                    label="Restaurant Name"
                    required
                    variant="outlined"
                    style={{ width: "100%", marginTop: "10px" }}
                    name="branch_name"
                    value={restaurantData.branch_name}
                    onChange={handleChange}
                />
                <div className="" style={{ marginTop: "10px", display: "flex", gap: "40px" }}>
                  <div className="logo-part" style={{}}>
                    <p style={{ textAlign: "left", fontSize: "12px", color: "#464646" }}>Logo*</p>
                    <div className="" style={{ width: "104px", marginTop: "5px", height: "94px", border: "1px solid #858585", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {restaurantData.logo ? (
                        <img src={URL.createObjectURL(restaurantData.logo)} alt="Selected Logo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
                    ) : (
                        <React.Fragment>
                          <label htmlFor="logoInput" style={{ cursor: "pointer" }}>
                            <img src="/images/icons/photo icon.svg" alt="Photo Icon" style={{ width: "24px", height: "24px" }} />
                          </label>
                          <input
                              id="logoInput"
                              type="file"
                              onChange={handleLogoChange}
                              accept=".png, .jpg, .jpeg"  // Specify the allowed file types
                              style={{ display: "none" ,width:'100%'}}
                          />                        </React.Fragment>
                    )}
                  </div>


                  </div>
                  <div className="" style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "end", gap: "10px" }}>
                    <p style={{ textAlign: "left", fontSize: "12px", color: "#464646" }}>(File format: jpg,png)</p>

                    <Button variant="contained" onChange={handleLogoChange} style={{ backgroundColor: "#CBE9E4", color: "#464646", width: "300px" }}> <React.Fragment>
                      <label htmlFor="logoInput" style={{ cursor: "pointer" ,display:'flex',alignItems:'center',gap:'8px',width:'100%', justifyContent:'center'}}>
                        <p>Add Logo </p>
                        <img src="/images/icons/photo icon.svg" alt="Photo Icon" style={{ width: "24px", height: "24px" }} />
                      </label>
                      <input id="logoInput" type="file" onChange={handleLogoChange} style={{ display: "none" }} />
                    </React.Fragment></Button>

                  </div>
                </div>
                <TextField
                    id="outlined-basic"
                    label="Address"
                    required
                    variant="outlined"
                    style={{ width: "100%", marginTop: "10px" }}
                    name="address"
                    value={restaurantData.address}
                    onChange={handleChange}
                />
                <Link to="/resturentinformation">
                  <Button onClick={handleCreateRestaurant} variant="contained" style={{ backgroundColor: "#44A08D", color: "#FFFF", width: "100%", marginTop: "10px" }}>Next</Button>
                </Link>
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      </>
  );
}

export default CreateResturent;
