import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:7213/api/";

export const login = (username: string, password: string) => {
    const user = {
        username: username,
        password: password
    }
    return axios
        .post(API_URL + "Auth/login", {
            username,
            password
        })
        .then((response) => {
                localStorage.setItem("user", response.data);
            return response.status;
        })
}

export const logout = () => {
    localStorage.removeItem("user");
    console.log("logged out");
}

export const register = (username: string, password: string) => {
    return axios.post(API_URL + "signup", {
        username,
        password
    });
}

export const getCurrentUser = () => {
    let str = localStorage.getItem("user");

    return axios.get(API_URL + "Auth", {headers: authHeader()})
        .then((response) => {
            console.log(response.data);
            return response.data;
        });
}

export function getToken() {
    let str = localStorage.getItem("user");

    return str!;
}