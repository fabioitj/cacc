import axios from "axios";

const url = "http://localhost/WsCACCNew/api/v1/";

function sendComentario(email, nome, obs){
    return axios.get(url + "Contato/SendComentario");
}

export {sendComentario};