import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';

function CreateRestaurantAndInformation() {
  const navigate = useNavigate();

  const [restaurantData, setRestaurantData] = useState({
    name: '',
    logo: '',
    address: '',
  });

  const [formData, setFormData] = useState({
    contactNumber: '',
    email: '',
    bin_number: '',
    branch_name: '',
    restaurantName: '',
    branchManagerEmail: '',
    isBranchManager: false,
  });



  const [step, setStep] = useState(1); // Track the current step

  const handleInputChange = (e, isRestaurantData) => {
     setFormData({
       ...isRestaurantData ? restaurantData : formData,
       [e.target.name]: e.target.value
     })


    // isRestaurantData ? setRestaurantData(updatedData) : setFormData(updatedData);
  };

  const handleRrestaurantChange=(e)=>{
    setRestaurantData({
      ...restaurantData,
      [e.target.name]: e.target.value
    })
  }
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setRestaurantData({
      ...restaurantData,
      logo: file,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    try {
      // Validate form fields for both steps
      if (
          (!restaurantData.name || !restaurantData.logo || !restaurantData.address) &&
          (!formData.contactNumber || !formData.email || !formData.bin_number || !formData.branch_name ||  !formData.branchManagerEmail)
      ) {
        console.error('Please fill in all required fields.');
        return;
      }

      const restaurantInformation = {
        branch_name: formData.branch_name,
        manager_email: formData.branchManagerEmail,
        name: restaurantData.name,
        logo: restaurantData.logo, // You may need to replace this with the actual URL or file path
        address: restaurantData.address, // Using the address from Create Restaurant step
        email: formData.email,
        phone: formData.contactNumber,
        payment_type: 'PAY_FIRST', // You may adjust this based on your business logic
        bin_number: formData.bin_number,

      };
      console.log(restaurantInformation)

      const informationResponse = await axios.post(
          'http://192.168.27.90:8000/rest/restaurant/',
          restaurantInformation,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
          }
      );

      console.log('Restaurant information submitted successfully:', informationResponse.data);

      // Show success toast
      console.log('Successfully submitted both restaurant and information data.');

      // Redirect or perform other actions after successful submission
      navigate('/finalpage');
    } catch (error) {
      console.error('Failed to create restaurant or submit information:', error.response ? error.response.data : error.message);
      console.error('Failed to submit both restaurant and information data. Please try again.');
    }
  };

  const isNextDisabled =
      (step === 1 && (!restaurantData.name || !restaurantData.logo || !restaurantData.address)) ||
      (step === 2 &&
          (!formData.contactNumber || !formData.email || !formData.bin_number || !formData.branch_name || !formData.branchManagerEmail));
  return (
      <>
        <div className="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
          <Nav />
          <Container>
            <div className="register" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div className="" style={{ width: '60%', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', color: '#464646', fontWeight: '500', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
                  {step === 1 ? 'Create Restaurant' : 'Restaurant Information'}
                </p>

                {step === 1 && (
                    <>
                      <TextField
                          id="outlined-basic"
                          label="Restaurant Name"
                          required
                          variant="outlined"
                          style={{ width: '100%', marginTop: '10px' }}
                          name="name"
                          value={restaurantData.name}
                          onChange={(e) => handleRrestaurantChange(e, true)}
                      />

                      <div className="" style={{ marginTop: '10px', display: 'flex', gap: '40px' }}>
                        <div className="logo-part" style={{}}>
                          <p style={{ textAlign: 'left', fontSize: '12px', color: '#464646' }}>Logo*</p>
                          <div
                              className=""
                              style={{
                                width: '104px',
                                marginTop: '5px',
                                height: '94px',
                                border: '1px solid #858585',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                          >
                            {restaurantData.logo ? (
                                <img
                                    src={URL.createObjectURL(restaurantData.logo)}
                                    alt="Selected Logo"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                                />
                            ) : (
                                <React.Fragment>
                                  <label htmlFor="logoInput" style={{ cursor: 'pointer' }}>
                                    <img src="/images/icons/photo icon.svg" alt="Photo Icon" style={{ width: '24px', height: '24px' }} />
                                  </label>
                                  <input id="logoInput" type="file" onChange={handleLogoChange} accept=".png, .jpg, .jpeg" style={{ display: 'none', width: '100%' }} />
                                </React.Fragment>
                            )}
                          </div>
                        </div>
                        <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'end', gap: '10px' }}>
                          <p style={{ textAlign: 'left', fontSize: '12px', color: '#464646' }}>(File format: jpg,png)</p>
                          <Button
                              variant="contained"
                              onChange={handleLogoChange}
                              style={{ backgroundColor: '#CBE9E4', color: '#464646', width: '300px' }}
                          >
                            <React.Fragment>
                              <label
                                  htmlFor="logoInput"
                                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center' }}
                              >
                                <p>Add Logo </p>
                                <img src="/images/icons/photo icon.svg" alt="Photo Icon" style={{ width: '24px', height: '24px' }} />
                              </label>
                              <input id="logoInput" type="file" onChange={handleLogoChange} style={{ display: 'none' }} />
                            </React.Fragment>
                          </Button>
                        </div>
                      </div>
                      <TextField
                          id="outlined-basic"
                          label="Address"
                          required
                          variant="outlined"
                          style={{ width: '100%', marginTop: '10px' }}
                          name="address"
                          value={restaurantData.address}
                          onChange={(e) => handleRrestaurantChange(e, true)}
                      />

                      <Button
                          variant="contained"
                          style={{ backgroundColor: '#44A08D', color: '#FFFF', width: '100%', marginTop: '10px' }}
                          onClick={handleNext}
                          disabled={isNextDisabled}
                      >
                        Next
                      </Button>
                    </>
                )}

                {step === 2 && (
                    <>
                      <p style={{ fontSize: '14px', color: '#464646', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
                        Please enter all the information to create a restaurant
                      </p>
                      <TextField
                          id="outlined-basic"
                          label="Contact Number"
                          placeholder="e.g. +880123456789"
                          required
                          variant="outlined"
                          style={{ width: '100%', marginTop: '10px' }}
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={(e) => handleInputChange(e, false)}
                      />

                      <TextField
                          id="outlined-basic"
                          label="Email"
                          placeholder="e.g. branch@mail.com"
                          required
                          variant="outlined"
                          style={{ width: '100%', marginTop: '10px' }}
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange(e, false)}
                      />

                      <TextField
                          id="outlined-basic"
                          label="BIN Number"
                          placeholder="e.g. 0001251245-0101"
                          required
                          variant="outlined"
                          style={{ width: '100%', marginTop: '10px' }}
                          name="bin_number"
                          value={formData.bin_number}
                          onChange={(e) => handleInputChange(e, false)}
                      />

                      <TextField
                          id="outlined-basic"
                          label="Branch Name"
                          placeholder="e.g. Uttara"
                          required
                          variant="outlined"
                          style={{ width: '100%', marginTop: '10px' }}
                          name="branch_name"
                          value={formData.branch_name}
                          onChange={(e) => handleInputChange(e, false)}
                      />



                      <p style={{ fontSize: '14px', color: '#464646', marginBlockStart: '1em', marginBlockEnd: '1em' }}>
                        A main branch will be created using this name. (format: “Restaurant Name - Branch Name”)
                      </p>

                      <TextField
                          id="outlined-basic"
                          label="Branch Manager Email"
                          placeholder="e.g. manager@mail.com"
                          required
                          variant="outlined"
                          style={{ width: '100%' }}
                          name="branchManagerEmail"
                          value={formData.branchManagerEmail}
                          onChange={(e) => handleInputChange(e, false)}
                      />

                      <Button
                          variant="contained"
                          style={{ backgroundColor: '#44A08D', color: '#FFFF', width: '100%', marginTop: '10px' }}
                          onClick={handleSubmit}
                          disabled={isNextDisabled}
                      >
                        Submit
                      </Button>
                    </>
                )}
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      </>
  );
}

export default CreateRestaurantAndInformation;
