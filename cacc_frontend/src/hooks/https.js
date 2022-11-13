const url = "http://localhost:80/cacc_backend/api/";
var config = {
    headers: {
        'Content-Type': 'application/json'
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

