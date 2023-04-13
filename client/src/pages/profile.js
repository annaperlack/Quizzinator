import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Select, Button, List, ListItem, ListItemText, Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Auth from '../utils/auth';


    const Profile = (props) => {
        Auth.getProfile()
        const profile = Auth.getProfile()
        
    return (
    <h1>Welcome, {profile.data.name}
    <Avatar>S</Avatar>
    </h1>
    )
}

export default Profile;