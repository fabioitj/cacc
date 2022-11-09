import axios from "axios";
import {url, config} from "./https.js";

function getDiretoria(){
    // console.log("URL REQUEST: ", url + "Diretoria/getDiretoria")
    return axios.get(url + "Diretoria/getDiretoria");
}

function alternarAtividade(id){
    return axios.put(url + "Diretoria/alterarStatus?id=" + id, config);
}

function deleteRegistro(id){
    return axios.delete(url + "Diretoria/deleteRegistro?id=" + id, config)
}

function createRegistro(obj){
    if(obj.iddiretoria == "" || obj.iddiretoria == null || obj.iddiretoria == undefined)
        return axios.post(url + "Diretoria/createRegistro", obj, config);
    else
        return axios.put(url + "Diretoria/updateRegistro", obj, config);
}


export {getDiretoria, alternarAtividade, deleteRegistro, createRegistro};