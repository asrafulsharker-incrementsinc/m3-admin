import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const QrBoard = () => {
    const [restaurantData, setRestaurantData] = useState(null);
    const [error, setError] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('access_token');
                const response = await axios.get('http://192.168.27.90:8000/rest/restaurant/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                // Assuming the response is an array and you want the first item
                const firstRestaurant = response.data[0];
                setRestaurantData(firstRestaurant);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!restaurantData) {
        return <div>Loading...</div>;
    }

    const qrImage = restaurantData.branches[0]?.qr_image;
    const branchName = restaurantData.branches[0]?.name;

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <p style={{ color: "#44a08d", fontWeight: 'bold', fontSize: "30px", paddingTop: "20px" }}>QR Code</p>
            <div style={{ backgroundColor: "#FFFFFF", padding: "20px", width: "130%", borderRadius: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ fontSize: "25px", fontWeight: 'bold' }}>{branchName}</p>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <FileDownloadIcon style={{ color: "#44a08d" }} />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Download as png</MenuItem>
                        <MenuItem onClick={handleClose}>Download as PDF</MenuItem>
                    </Menu>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={qrImage} alt={restaurantData.name} style={{ width: "200px", padding: "10%, 30%" }} />
                </div>
            </div>
        </div>
    );
};

export default QrBoard;
