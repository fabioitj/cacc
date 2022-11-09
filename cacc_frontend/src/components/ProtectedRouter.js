import { Redirect } from "react-router";
import { Route, useNavigate } from "react-router-dom";
import { getValidToken } from "../hooks/https.js";
import Login from "../pages/Login/Login.js";

function ProtectedRoute({children}) {
    const navigate = useNavigate();

    const validToken = getValidToken();
    if(validToken != null) {
        return children
    }
    else{
        // navigate("/login");
        return <Login/>
    }
}

export default ProtectedRoute;