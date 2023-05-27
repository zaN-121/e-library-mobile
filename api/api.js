import axios from "axios";

const Api = axios.create({
    baseURL: "http://10.10.100.113:8080",
    responseType: 'json',
    withCredentials: true
})

export default Api