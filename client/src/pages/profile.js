import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Select, Button, List, ListItem, ListItemText, Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';


    const Profile = (props) => {
        const [formState, setFormState] = useState({ name: ''});
    
        const handleChange = (event) => {
            const { name, value } = event.target;
    
            setFormState({
                ...formState,
                [name]: value,
            });
        };

    return (
    <h1>Welcome <TextField
    label="Name"
    name='name'
    value={formState.name}
    onChange={handleChange}
    required
    variant="outlined"
    color="secondary"
    type="name"
    fullWidth
    sx={{ mb: 3 }}
/>
    <Avatar>H</Avatar>
    </h1>
    )
}

export default Profile;