import axios from "axios";
import {url, config} from './https.js';




function getFullCargos(){
    return axios.get(url + "Cargos/getFullCargos", config);
}

function deleteRegistro(id){
    return axios.delete(url + "Cargos/deleteRegistro?id=" + id, config)
}

function saveRegistro(obj){
    if(obj.idcargo == "" || obj.idcargo == null || obj.idcargo == undefined)
        return axios.post(url + "Cargos/createRegistro", obj, config);
    else
        return axios.put(url + "Cargos/updateRegistro", obj, config);
}


export {getFullCargos, deleteRegistro, saveRegistro};