import axios from "axios";
import {url, config} from "./https.js";

function getFullDiretoria() {
    return axios.get(url + "Diretoria/getFullDiretoria", config);
}

function getDiretoria(){
    // console.log("URL REQUEST: ", url + "Diretoria/getDiretoria")
    return axios.get(url + "Diretoria/getDiretoria");
}

function alternarAtividade(id){
    const obj = {
        "iddiretoria": id
    }
    return axios.put(url + "Diretoria/alterarStatus", obj, config);
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


export {getDiretoria, getFullDiretoria, alternarAtividade, deleteRegistro, createRegistro};