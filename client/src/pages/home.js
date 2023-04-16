import React from "react";
import Auth from '../utils/auth';
import Grid from '@mui/material/Unstable_Grid2';


export default function Home() {
    const profile = Auth.getProfile()
    return (
        <Grid item>
            <h1>Welcome, {profile.data.name}
            </h1>
        </Grid>
    )
}