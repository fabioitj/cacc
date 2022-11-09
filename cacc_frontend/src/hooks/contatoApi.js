import axios from "axios";
import {url, config} from "./https.js";

function sendComentario(email, nome, obs){
    return axios.post(url + "Contato/sendComentario?email="+email + "&nome="+nome + "&obs="+obs);
}

function getComentarios(){
    return axios.get(url + "Contato/getComentarios");
}

function deleteRegistro(id){
    return axios.delete(url + "Contato/deleteRegistro?id="+id);
}

export {sendComentario, getComentarios, deleteRegistro};