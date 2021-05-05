import axios from "axios";
import interceptors from "./axios.interceptor";
require("dotenv").config({
    path: "../../.env",
});
const http = axios.create({
    baseURL: "https://interior-architecture.herokuapp.com/api/v1/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 30000, // request timeout
});

interceptors.setup(http);
interceptors.checkToken(http);

export default http;