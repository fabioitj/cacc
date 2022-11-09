import axios from "axios";
import {url, config} from "./https.js";

function getFullContas(){
    return axios.get(url + "Contas/getFullContas", config);
}

function deleteRegistro(id){
    return axios.delete(url + "Contas/deleteRegistro?id=" + id, config)
}

function saveRegistro(obj){
    if(obj.idconta == "" || obj.idconta == null || obj.idconta == undefined)
        return axios.post(url + "Contas/createRegistro", obj, config);
    else
        return axios.put(url + "Contas/updateRegistro", obj, config);
}


export {getFullContas, deleteRegistro, saveRegistro};