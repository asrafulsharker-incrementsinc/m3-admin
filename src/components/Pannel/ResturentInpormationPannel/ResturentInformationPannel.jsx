import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ResturentInformationPannel() {
    const [restaurantData, setRestaurantData] = useState(null);
    const [error, setError] = useState(null);

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

    return (
        <div className="" style={{ background: "#F0F0F0", padding: "15px", borderRadius: "8px" }}>
            <div className="" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={restaurantData.logo} alt=""  style={{width:"40px", height:"40px", borderRadius:"50%"}}/>
                <p style={{ fontSize: "20px", color: "#49454F", fontWeight: "700" }}>{restaurantData.name}</p>
            </div>
            <div className="" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <img src="/images/icons/location_on.svg" alt="" />
                <p style={{ fontSize: "14px", color: "#464646" }}>{restaurantData.address}</p>
            </div>
            <div className="" style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
                <img src="/images/icons/call.svg" alt="" />
                <p style={{ fontSize: "14px", color: "#464646" }}>{restaurantData.phone}</p>
            </div>
            <div className="" style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
                <img src="/images/icons/mail.svg" alt="" />
                <p style={{ fontSize: "14px", color: "#464646" }}>{restaurantData.email}</p>
            </div>
        </div>
    );
}

export default ResturentInformationPannel;
