import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_QUIZ } from '../utils/queries.js';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const Leaderboard = () => {
    const { loading, data } = useQuery(QUERY_QUIZ);
    const leaderData = data?.quizzes || [];
    console.log(leaderData)

    return (
        <Grid>
            <List sx={{ listStyleType: 'decimal', }}>
                {leaderData.map(leader => (
                    <ListItem divider='true'>
                        <ListItemText
                            key={leader._id}
                            primary={
                                <Typography variant='body1'>
                                    Name: {leader.user_name}
                                </Typography>
                            }
                            secondary={
                                <Typography variant='caption'>
                                    Average: {Math.trunc(leader.score / leader.total * 100)}%
                                </Typography>
                            }
                            sx={{
                                display: 'list-item',
                            }}
                        >
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
}
export default Leaderboard