import React from 'react';
import {Select, MenuItem, FormControl, InputLabel, Box} from "@mui/material";

const OfferBoard = () => {
    return (
        <div>
            <p style={{ color: "#44a08d", fontWeight: 'bold', fontSize: "30px", paddingTop: "20px" }}>Offers</p>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>


        </div>
    );
};

export default OfferBoard;