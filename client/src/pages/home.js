import React from "react";
import { FormControl, MenuItem, InputLabel, Select, Button, List, ListItem, ListItemText, Avatar } from '@mui/material';
import Auth from '../utils/auth';


export default function Home(){
    const profile = Auth.getProfile()
    return (
        <h1>Welcome, {profile.data.name}
        </h1>
    )
}