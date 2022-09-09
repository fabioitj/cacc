import axios from "axios";

const url = "http://localhost/WsCACCNew/api/v1/";

function getFullCargos(){
    return axios.get(url + "Cargos/getFullCargos");
}

function deleteRegistro(id){
    return axios.delete(url + "Cargos/deleteRegistro?id=" + id)
}

function saveRegistro(obj){
    if(obj.idcargo == "" || obj.idcargo == null || obj.idcargo == undefined)
        return axios.post(url + "Cargos/createRegistro", obj);
    else
        return axios.put(url + "Cargos/updateRegistro", obj);
}


export {getFullCargos, deleteRegistro, saveRegistro};