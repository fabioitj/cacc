import "./Login.css";
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Field from "../../components/Field/field";
import { signin, signout } from "./../../hooks/authApi.js";
import Error from "../../components/Modal/Error/Error";

const Login = () => {

    let navigate = useNavigate();
    const backHistory = () => { 
        navigate(-1);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnLogin = () => {
        const user = {
            "email": email,
            "password": password
        };
        
        if(!validFields())
            return;

        signin(user)
        .then(response => {
            let data = response.data;
            if(data.success){
                let token = data.data.token;
                let user = data.data.user;

                localStorage.setItem("validToken", token);
                localStorage.setItem("userLogged", JSON.stringify(user));
                navigate("/admin/eventos");
            }
            else{
                mostra_erros(data.itens)
                signout();
            }
        });
        

        // if(true){
        //     navigate("/admin/publicacoes");
        // }
    }

    const mostra_erros = (itens) => {
        if(itens) {
            let msgAlert = "";
            for(const item of itens){
                msgAlert += item.message += "\n";
            }

            setError(msgAlert);
            setErrorModalOpen(true);
        }
    }

    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [error, setError] = useState("");
    const validFields = () => {
        let msgValidation = "";
        if(isNull(email))
            msgValidation += "Você precisa preencher o campo 'Email'\n";
        
        if(isNull(password))
            msgValidation += "Você precisa preencher o campo 'Senha'\n";

        if(!isNull(msgValidation)){
            setError(msgValidation);
            setErrorModalOpen(true);
            return false;
        }

        return true;
    }

    const isNull = (item) => {
        return item == "" || item == undefined || item == null;
    }

    return (
        <div className="Login">
            <div className="ModalLogin">
                <div className="ModalHeader">
                    <FaArrowLeft className="LeftArrow" onClick={backHistory}/>
                    <div className="ModalHeaderTitle">
                        <h3>Login</h3>
                    </div>
                    <div className="BlankSpace">

                    </div>
                </div>
                <div className="ModalBody">
                    <div className="Field">
                        <Field label={"Email"} typeInput={"email"} typeOfField={"input"} classe={"InputField"} get={email} set={setEmail}/>
                    </div>
                    <div className="Field">
                        <Field label={"Senha"} typeInput={"password"} typeOfField={"input"} classe={"InputField"} get={password} set={setPassword}/>
                    </div>
                </div>
                <div className="ModalFooter">
                    <div className="ButtonBox">
                        <button onClick={handleOnLogin} className="btn btn-primary">Entrar</button>
                    </div>
                </div>
            </div>
            {
                errorModalOpen &&
                <Error title="Ocorreu um problema" setOpenModal={setErrorModalOpen}>
                    <p>
                        {error}
                    </p>
                </Error>
            }
        </div>
       
    )
}

export default Login;