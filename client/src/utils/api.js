import axios from 'axios'

export const getRandom = (limit, category)=> {
    return axios.get (`https://the-trivia-api.com/api/questions?limit=${limit}&categories=${category}`)
}