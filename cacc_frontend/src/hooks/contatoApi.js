import axios from "axios";

const url = "http://localhost/WsCACCNew/api/v1/";

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