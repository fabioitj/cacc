import axios from "axios";

const url = "http://localhost/WsCACCNew/api/v1/";

function getEventos(){
    return axios.get(url + "Eventos/getEventos");
}

function deleteRegistro(id){
    return axios.delete(url + "Eventos/deleteRegistro?id=" + id)
}

function saveRegistro(obj){
    if(obj.idevento == "" || obj.idevento == null || obj.idevento == undefined)
        return axios.post(url + "Eventos/createRegistro", obj);
    else
        return axios.put(url + "Eventos/updateRegistro", obj);
}


export { getEventos, saveRegistro, deleteRegistro };