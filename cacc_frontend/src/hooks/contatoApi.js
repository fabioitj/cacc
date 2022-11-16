import axios from "axios";
import {url, config} from "./https.js";

function sendComentario(email, nome, obs){
    const obj = {
        email,
        nome,
        obs
    };

    return axios.post(url + "Contato/sendComentario", obj, config);
}

function getComentarios(){
    return axios.get(url + "Contato/getComentarios", config);
}

function deleteRegistro(id){
    return axios.delete(url + "Contato/deleteRegistro?id="+id, config);
}

export {sendComentario, getComentarios, deleteRegistro};