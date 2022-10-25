import axios from "axios";

const url = "http://localhost/WsCACCNew/api/v1/";

function getFullContas(){
    return axios.get(url + "Contas/getFullContas");
}

function deleteRegistro(id){
    return axios.delete(url + "Contas/deleteRegistro?id=" + id)
}

function saveRegistro(obj){
    if(obj.idconta == "" || obj.idconta == null || obj.idconta == undefined)
        return axios.post(url + "Contas/createRegistro", obj);
    else
        return axios.put(url + "Contas/updateRegistro", obj);
}


export {getFullContas, deleteRegistro, saveRegistro};