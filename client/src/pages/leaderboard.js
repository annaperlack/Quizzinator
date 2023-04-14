import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_QUIZ } from '../utils/queries.js';
import { Container } from '@mui/material';



const Leaderboard = () => {
    const { loading, data } = useQuery(QUERY_QUIZ);
    const leaderData = data?.quizzes || [];
    console.log(leaderData)

    return (
        <Container>
            <ul>
                {leaderData.map(leader => (
                    <li key={leader._id}>
                    <label>Average: {Math.trunc(leader.score / leader.total* 100) }%</label>      
                    <label>Name: {leader.user_name}</label>    
                    </li>
                ))}
            </ul>
        </Container>
    )
}
export default Leaderboard