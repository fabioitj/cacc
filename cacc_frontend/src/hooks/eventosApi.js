import axios from "axios";
import {url, config, getValidToken} from "./https.js";

function getEventos(){
    return axios.get(url + "Eventos/getEventos");
}

function deleteRegistro(id){
    return axios.delete(url + "Eventos/deleteRegistro?id=" + id, config)
}

function saveRegistro(obj){
    getValidToken();
    if(obj.idevento == "" || obj.idevento == null || obj.idevento == undefined)
        return axios.post(url + "Eventos/createRegistro", obj, config);
    else
        return axios.put(url + "Eventos/updateRegistro", obj, config);
}


export { getEventos, saveRegistro, deleteRegistro };