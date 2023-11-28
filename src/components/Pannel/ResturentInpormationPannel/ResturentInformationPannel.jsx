import React from 'react'

function ResturentInformationPannel() {
    return (
        <>
            <div className="" style={{ background: "#F0F0F0", padding: "15px", borderRadius: "8px" }}>
                <div className="" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src="/images/additional image/RestaurantLogo.jpg" alt="" />
                    <p style={{ fontSize: "20px", color: "#49454F", fontWeight: "700" }}>Sultan's Dine</p>
                </div>
                <div className="" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    <img src="../../../../public/images/icons/location_on.svg" alt="" />
                    <p style={{ fontSize: "14px", color: "#464646" }}>Quantum Emerald Point, H# 1/B(1st floor, Gareeb-e-Nawaz Ave, Dhaka 1230</p>
                </div>
                <div className="" style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
                    <img src="../../../../public/images/icons/call.svg" alt="" />
                    <p style={{ fontSize: "14px", color: "#464646" }}>+8801407-059987</p>
                </div>
                <div className="" style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
                    <img src="../../../../public/images/icons/mail.svg" alt="" />
                    <p style={{ fontSize: "14px", color: "#464646" }}>sultans.dine.uttara13@gmail.com</p>
                </div>
            </div>
        </>)
}

export default ResturentInformationPannel