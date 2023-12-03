import React from 'react';
import Nav from "../Nav/Nav.jsx";
import Menubar from "../Manubar/Manubar.jsx";
import SettingsBoard from "./SettingsBoard.jsx";

const Settings = () => {
    return (
        <>
            <Nav/>
            <div className="" style={{display:"flex", gap:"20px"}}>
                <Menubar />
                <SettingsBoard/>
            </div>

        </>
    );
};

export default Settings;