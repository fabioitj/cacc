import "./Login.css";
import { FaArrowLeft } from "react-icons/fa"
import { useHistory, useNavigate } from "react-router-dom"
import { useState } from "react";
import Field from "../../components/Field/field";

const Login = () => {

    let navigate = useNavigate();
    const backHistory = () => { 
        navigate(-1);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnLogin = () => {
        if(true){
            navigate("/admin/publicacoes");
        }
    }

    return (
        <div className="Login">
            <div className="ModalLogin">
                <div className="ModalHeader">
                    <FaArrowLeft className="LeftArrow" onClick={backHistory}/>
                    <div className="ModalHeaderTitle">
                        <img/>
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
        </div>
    )
}

export default Login;