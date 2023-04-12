import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_QUIZ } from '../utils/queries.js';

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([])
    const { loading, data } = useQuery(QUERY_QUIZ);
    const leaderData = data?.quizzes || [];
    console.log(leaderData)
    return (
        <>
        <ul>
            {leaderData.map(leader => (
                <li key ={leader._id}>
                    {leader.score}
                    {leader.email}
                </li>
            ))}
        </ul>
        </>
    )
}
export default Leaderboard