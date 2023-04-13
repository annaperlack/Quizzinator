import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Select, Button, List, ListItem, ListItemText, Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Auth from '../utils/auth';


    const Profile = (props) => {
        const profile = Auth.getProfile()
        
    return (
    <h1>Welcome, {profile.data.name}
    <Avatar>
    {profile.data.name.charAt(0)}
    </Avatar>
    </h1>
    )
}

export default Profile;