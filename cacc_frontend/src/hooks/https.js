const url = "http://localhost/cacc_backend/api/";
var config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    }
};


const getValidToken = () => {
    const validToken = localStorage.getItem('validToken');
    if(validToken != "" && validToken != null && validToken != undefined){
        config.headers.Authorization = "Bearer " + validToken;
        return validToken
    }
    else{
        config.headers.Authorization = "";
        return null;
    }
}


export {url, config, getValidToken};

