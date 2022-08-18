import axios from "axios";

const url = "http://localhost/WsCACCNew/api/v1/";

function getDiretoria(){
    return axios.get(url + "Diretoria/getDiretoria");
}

function getFullDiretoria(){
    return axios.get(url + "Diretoria/getFullDiretoria");
}

function alternarAtividade(id){
    return axios.put(url + "Diretoria/alterarStatus?id=" + id);
}

function deleteRegistro(id){
    return axios.delete(url + "Diretoria/deleteRegistro?id=" + id)
}

function createRegistro(obj){
    console.log(obj);
    return axios.post(url + "Diretoria/createRegistro", obj);
}


export {getDiretoria, getFullDiretoria, alternarAtividade, deleteRegistro, createRegistro};