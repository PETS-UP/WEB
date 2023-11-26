import axios from "axios";

const api = axios.create({
    baseURL: "https://petsup.sytes.net/api"
    // baseURL: "http://localhost:8081/api"
})

export default api;
