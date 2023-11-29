import React, { useState } from 'react';
import { Button, Checkbox, Container, TextField } from '@mui/material';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RestaurantInformation() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        contactNumber: '',
        email: '',
        bin_number: '',
        branch_name: '',
        restaurantName: '',
        branchManagerEmail: '',
        isBranchManager: false,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            isBranchManager: e.target.checked,
        });
    };

    const handleSubmit = async () => {
        try {
            // Assuming the response includes the restaurantId
            const restaurantResponse = await axios.post('http://192.168.27.90:8000/rest/restaurant', {
                name: formData.restaurantName,
                // ... other restaurant data
            });

            const { restaurantId } = restaurantResponse.data;

            const response = await axios.post('http://192.168.27.90:8000/rest/restaurant', {
                restaurantId,
                contactNumber: formData.contactNumber,
                email: formData.email,
                bin_number: formData.bin_number,
                branch_name: formData.branch_name,
                branchManagerEmail: formData.branchManagerEmail,
                isBranchManager: formData.isBranchManager,
            });

            console.log('Restaurant created successfully:', response.data);

            navigate('/finalpage'); // Redirect to the final page after successful submission
        } catch (error) {
            console.error('Failed to create restaurant:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <div className="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Nav />
                <Container>
                    <div className="register" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="" style={{ width: '60%', textAlign: 'center' }}>
                            <p style={{ fontSize: '24px', color: '#464646', fontWeight: '500', marginBlockStart: '1em', marginBlockEnd: '1em' }}>Restaurant Information</p>
                            <p style={{ fontSize: '14px', color: '#464646', marginBlockStart: '1em', marginBlockEnd: '1em' }}>Please enter all the information to create a restaurant</p>

                            <TextField
                                id="outlined-basic"
                                label="Contact Number"
                                placeholder='e.g. +880123456789'
                                required
                                variant="outlined"
                                style={{ width: '100%', marginTop: '10px' }}
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                            />

                            <TextField
                                id="outlined-basic"
                                label="Email"
                                placeholder='e.g. branch@mail.com'
                                required
                                variant="outlined"
                                style={{ width: '100%', marginTop: '10px' }}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <TextField
                                id="outlined-basic"
                                label="BIN Number"
                                placeholder='e.g. 0001251245-0101'
                                required
                                variant="outlined"
                                style={{ width: '100%', marginTop: '10px' }}
                                name="bin_number"
                                value={formData.bin_number}
                                onChange={handleChange}
                            />

                            <TextField
                                id="outlined-basic"
                                label="Branch Name"
                                placeholder='e.g. Uttara'
                                required
                                variant="outlined"
                                style={{ width: '100%', marginTop: '10px' }}
                                name="branch_name"
                                value={formData.branch_name}
                                onChange={handleChange}
                            />

                            <TextField
                                id="outlined-basic"
                                label="Restaurant Name"
                                required
                                variant="outlined"
                                style={{ width: '100%', marginTop: '10px' }}
                                name="restaurantName"
                                value={formData.restaurantName}
                                onChange={handleChange}
                            />

                            <p style={{ fontSize: '14px', color: '#464646', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
                                A main branch will be created using this name. (format: “Restaurant Name - Branch Name”)
                            </p>

                            <TextField
                                id="outlined-basic"
                                label="Branch Manager Email"
                                placeholder='e.g. manager@mail.com'
                                required
                                variant="outlined"
                                style={{ width: '100%' }}
                                name="branchManagerEmail"
                                value={formData.branchManagerEmail}
                                onChange={handleChange}
                            />

                            <div className="" style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                <Checkbox style={{ color: '#44A08D' }} checked={formData.isBranchManager} onChange={handleCheckboxChange} />
                                <p>I am the manager of this branch</p>
                            </div>

                            <Link to="/forgetpassword">
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: '#44A08D', color: '#FFFF', width: '100%', marginBottom: '10px' }}
                                    onClick={handleSubmit}
                                >
                                    Create & Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    );
}

export default RestaurantInformation;
