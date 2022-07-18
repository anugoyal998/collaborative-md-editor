import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:5000',
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
})

const url = process.env.SERVER || 'http://localhost:5000'

export const login = (data) => axios.post(`${url}/api/login`,data)