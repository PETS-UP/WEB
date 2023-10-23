import axios from "axios";

const api = axios.create({
    // baseURL: "ec2-54-211-207-232.compute-1.amazonaws.com:8080/api"
    baseURL: "http://localhost:8080/api"
})

export default api;
