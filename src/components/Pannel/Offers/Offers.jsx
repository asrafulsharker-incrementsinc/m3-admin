import React from 'react';
import Nav from "../Nav/Nav.jsx";
import Menubar from "../Manubar/Manubar.jsx";
import QrBoard from "../QR/QrBoard.jsx";
import OfferBoard from "./OfferBoard.jsx";

const Offers = () => {
    return (
        <>
            <Nav/>
            <div className="" style={{display:"flex", gap:"20px"}}>
                <Menubar />
                <OfferBoard/>

            </div>
        </>
    );
};

export default Offers;