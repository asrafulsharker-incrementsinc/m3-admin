import React from 'react';
import Nav from '../Nav/Nav'
import Menubar from '../Manubar/Manubar'
import QrBoard from "./QrBoard.jsx";
import CenterBoard from '../CenterBoard/CenterBoard'
import RecentOrder from '../RecentOrder/RecentOrder'
const Qr = () => {
    return (
<>
        <Nav/>
    <div className="" style={{display:"flex", gap:"20px"}}>
        <Menubar />
       <QrBoard/>

    </div>
</>
    );
};

export default Qr;