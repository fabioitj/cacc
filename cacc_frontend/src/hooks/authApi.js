import axios from 'axios';
import {url, config, getValidToken} from "./https.js";

function signin(user) {
    return axios.post(url + "Auth/signin", user, config);
}

function validateToken(){
    return axios.get(url + "Auth/validateToken", config);
}

function signout(){
    localStorage.setItem("userLogged", "");
    localStorage.setItem("validToken", "");
}

export {signin, validateToken, signout};