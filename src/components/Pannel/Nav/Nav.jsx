import { Button, Container } from '@mui/material';
import React, {useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import axios from "axios";

function Nav() {
    const navigate = useNavigate();
    const [restaurantData, setRestaurantData] = useState(null);
    const [error, setError] = useState(null);

    const handleLogout = () => {
        try {
            // Clear user authentication state (remove access_token and refresh_token from local storage, etc.)
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');

            // Use useNavigate to navigate programmatically
            navigate('/');

            // You can also use window.location.href = '/login'; if navigate doesn't work for some reason
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

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

    const logo = restaurantData.logo;


    return (
        <>
            <div className="" style={{ background: "#FFFF", borderBottom: "1px solid #708E88" }}>
                <Container className="navbar" maxWidth="xl">
                    <div className="logo " style={{ marginTop: "15px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                        <img src="/images/M3 Logo.svg" alt="logo" style={{ padding: "5px" }} />

                        <div className=" " style={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: "10px" }}>
                            <Button><img src="/images/icons/notifications.svg" alt="" /></Button>
                            <Button type="button" onClick={handleLogout}>
                                <img src="/images/icons/logout.png" alt="" />
                            </Button>
                            <Button><img src={logo} alt="" style={{width:"40px", height:"40px", borderRadius:"50%"}}/></Button>
                        </div>

                    </div>
                </Container>
            </div>
        </>
    );
}

export default Nav;
