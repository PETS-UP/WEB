import axios from "axios";

const api = axios.create({
    baseURL: "https://petsup-aplication.azurewebsites.net"
})

export default api;
