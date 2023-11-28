import React, { useState } from 'react';
import { Container } from "@mui/material";
import './Steper.css';

const Steper = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            <Container>
                <div className="steper">
                    <div className="steper1">
                        <div
                            className="steperInsider"
                            style={{
                                width: activeStep === 2 ? '99%' : '32%',
                                backgroundColor: activeStep === 2 ? '#d0c724' : '#d0c724',
                            }}
                        ></div>
                    </div>
                    <div
                        className="oneIconSteper"
                        onClick={() => handleStepClick(1)}
                        style={{ backgroundColor: activeStep === 1 ? '#d0c724' : '#d0c724' }}
                    >
                        1
                    </div>
                    <div
                        className="twoIconSteper"
                        onClick={() => handleStepClick(2)}
                        style={{ backgroundColor: activeStep === 2 ? '#d0c724' : '#d0c724' }}
                    >
                        2
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Steper;
