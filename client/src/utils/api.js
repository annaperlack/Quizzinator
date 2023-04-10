import axios from 'axios'

export const getRandom = (limit)=> {
    return axios.get (`https://the-trivia-api.com/api/questions?limit=${limit}`)
}