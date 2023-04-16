import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Select, Avatar, } from '@mui/material';
import { green, red, blue } from '@mui/material/colors'
import Auth from '../utils/auth';
import { UPDATE_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';


const Profile = (props) => {
    const [updateUser] = useMutation(UPDATE_USER);
    const profile = Auth.getProfile()
    const [color, setColor] = useState(green[500]);
    const handleColorSelect = async (event) => {
        event.preventDefault();
        try {
            const { data } = await updateUser({
                variables: { avatar_color: 'green' },
            });
            setColor(event.target.value)
            console.log("update user: ", data)
        } catch (e) {
            console.error(e);
        }
    };


    return (

        <div>

            <h1>Welcome, {profile.data.name}
                <Avatar sx={{ bgcolor: color }}>
                    {profile.data.name.charAt(0)}
                </Avatar>
            </h1>

            <FormControl>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={color}
                    label="Avatar Color"
                    onChange={handleColorSelect}
                >
                    <MenuItem value={green[500]}>Green</MenuItem>
                    <MenuItem value={red[500]}>Red</MenuItem>
                    <MenuItem value={blue[500]}>Blue</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Profile;