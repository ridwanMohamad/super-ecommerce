import axios from "axios";

export default axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 10000,
})