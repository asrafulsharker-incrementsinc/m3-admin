import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TocIcon from '@mui/icons-material/Toc';
import {Button, Grid, TextField} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import KeyIcon from '@mui/icons-material/Key';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SaveIcon from '@mui/icons-material/Save';
const SettingsBoard = () => {
    const [country, setCountry] = React.useState('Bangladesh');
    const [timezone, setTimezone] = React.useState('Dhaka (UTC+06:00)');
    const [currency, setCurrency] = React.useState('BDT (৳)');
    const [language, setLanguage] = React.useState('English');
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [feedback, setFeedback] = React.useState('');
    const [feedbackDescription, setFeedbackDescription] = React.useState();
    return (
        <div style={{width:"100%",marginRight:"20px"}}>
            <p style={{ color: "#44a08d", fontWeight: 'bold', fontSize: "30px", paddingTop: "20px" }}>Settings</p>

            <Accordion sx={{backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "10px",marginBottom:'20px',marginTop:"20px"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{display:'flex',alignItems:"center",justifyContent:'center',fontWeight:'bold',fontSize:"25px",gap:"15px"}}><TocIcon style={{fontSize:"30px"}}/>Localization</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:"20px"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Country"
                                    required
                                    style={{ width: "100%" }}
                                    name="country"
                                    value={country}
                                    onChange={(event) => {
                                        setCountry(event.target.value);
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Time Zone"
                                    required
                                    style={{ width: "100%" }}
                                    name="country"
                                    value={timezone}
                                    onChange={(event) => {
                                        setTimezone(event.target.value);
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Currency"
                                    required
                                    style={{ width: "100%" }}
                                    name="currency"
                                    value={currency}
                                    onChange={(event) => {
                                        setCurrency(event.target.value);
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "10px",marginBottom:'20px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{display:'flex',alignItems:"center",justifyContent:'center',fontWeight:'bold',fontSize:"25px",gap:"15px"}}><LanguageIcon style={{fontSize:"30px"}}/>Language</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:"20px"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Language"
                                    required
                                    style={{ width: "100%" }}
                                    name="language"
                                    value={language}
                                    onChange={(event) => {
                                        setLanguage(event.target.value);
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/*password */}

            <Accordion sx={{backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "10px",marginBottom:'20px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{display:'flex',alignItems:"center",justifyContent:'center',fontWeight:'bold',fontSize:"25px",gap:"15px"}}><KeyIcon style={{fontSize:"30px"}}/>Change Password</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:"20px"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Old Password"
                                    required
                                    style={{ width: "100%" }}
                                    name="oldPassword"
                                    value={oldPassword}
                                    onChange={(event) => {
                                        setOldPassword(event.target.value);
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6}>

                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="New Password"
                                    required
                                    style={{ width: "100%" }}
                                    name="newPassword"
                                    value={newPassword}
                                    onChange={(event) => {
                                        setNewPassword(event.target.value);
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    id="outlined-controlled"
                                    label="Confirm Password"
                                    required
                                    style={{ width: "100%" }}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(event) => {
                                        setConfirmPassword(event.target.value);
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: "end" ,marginTop:"20px"}}>
                        <Button
                            variant="contained"
                            size="small"
                            style={{ gap:"10px",backgroundColor:"#44a08d"}}
                            // onClick={handleFeedbackSubmit}
                        >
                            <SaveIcon/>
                            Save
                        </Button>
                    </div>
                </AccordionDetails>
            </Accordion>
            {/*give feedback */}

            <Accordion sx={{ backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "10px", marginBottom: '20px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ display: 'flex', alignItems: "center", justifyContent: 'center', fontWeight: 'bold', fontSize: "25px", gap: "15px" }}>
                        <FeedbackIcon style={{ fontSize: "30px" }} />
                        Give Feedback
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexDirection: 'column' }}>
                    <TextField
                        id="outlined-controlled"
                        label="Feedback"
                        required
                        // style={{ width: "100%" }}
                        name="feedback"
                        value={feedback}
                        onChange={(event) => {
                            setFeedback(event.target.value);
                        }}
                    />
                    <TextField
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        name="feedbackDescription"
                        value={feedbackDescription}
                        onChange={(event) => {
                            setFeedbackDescription(event.target.value);
                        }}
                        // style={{ width: "100%" }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: "end" }}>
                        <Button
                            variant="contained"
                            size="small"
                            style={{ gap:"10px",backgroundColor:"#44a08d"}}
                            // onClick={handleFeedbackSubmit}
                        >
                            Send
                        </Button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default SettingsBoard;