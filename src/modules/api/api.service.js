import axios from "axios";

export const api = axios.create({
    //baseURL: 'https://localhost:5001/api/'
    baseURL: 'https://weekly-report-01.digitalocean.ankocorp.com/api/'
})

