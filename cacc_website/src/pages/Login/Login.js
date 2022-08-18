import "./Login.css";
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

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
                        <label className="LabelField">Email</label>
                        <input type="email" className="InputField" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email..."/>
                    </div>
                    <div className="Field">
                        <label className="LabelField">Senha</label>
                        <input type="password" className="InputField" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Senha..."/>
                    </div>
                </div>
                <div className="ModalFooter">
                    <div className="ButtonBox">
                        <button onClick={handleOnLogin} className="ButtonLogin">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;