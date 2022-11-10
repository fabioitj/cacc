import { useState } from "react";
import Field from "../../components/Field/field";
import "./contato.css"
import { sendComentario } from "../../hooks/contatoApi.js";
import { FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Contato = () => {

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [obs, setObs] = useState("");

    // const navigate = useNavigate();

    const handleEnviarComentario = () => {
        if(validaDados()){
            sendComentario(email, nome, obs)
                .then((response) => {
                    let data = response.data;
                    if(data.success){
                        alert("Mensagem enviada com sucesso!");
                        resetFields();
                    }
                    else{
                        alert(data.itens[0].mensagem)
                    }
                });
        }
    }

    const resetFields = () => {
        setEmail("");
        setNome("");
        setObs("");
    }

    const validaDados = () => {
        let validation = true;
        if(isVazio(email)){
            alert("email");
            validation = false;
        }

        if(isVazio(nome)){
            alert("nome");
            validation = false;
        }

        if(isVazio(obs)){
            alert("obs");
            validation = false;
        }

        return validation;
    }

    const isVazio = (item) => item == "" || item == null || item == undefined;

    const handleClickRedeSocial = (tipo) => {
        switch(tipo){
            case 'I':
                window.open("https://www.instagram.com/cacc_univali/", "_blank");
                break;

            case 'D':
                window.open("https://discord.gg/JtGbyFeQ", "_blank");
                break;

            case 'W':
                window.open("https://chat.whatsapp.com/JHa2jWBp4JD67tOmCJjuDK", "_blank");
                break;
        }
    }

    return (
        <div className="Contato">
            <div className="ContatoBox">
                <div className="ContatoBoxHeader">
                    <h2>CONTATO</h2>
                </div>
                <div className="ContatoBoxBody">
                    <div className="RowField">
                        <div className="ColumnField">
                            <div className="Column6">
                                <div className="CoolText">
                                    <h1>Vamos conversar!</h1>
                                    <p>Juntos criaremos algo incrível.</p>
                                    <div className="RedesIcons">
                                        <FaInstagram className="InstagramIcon" onClick={() => { handleClickRedeSocial("I") }}/>
                                        <FaWhatsapp className="WhatsAppIcon" onClick={() => { handleClickRedeSocial("W") }}/>
                                        <FaDiscord className="DiscordIcon" onClick={() => { handleClickRedeSocial("D") }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="Column6">
                                <div className="FormularioBox">
                                    <div className="RowField">
                                        <h2>Mande uma mensagem</h2>
                                        <div className="ColumnField">
                                            <div className="Column6">
                                                <Field label={"Email"} typeInput={"email"} typeOfField={"input"} classe={"emailInput"} get={email} set={setEmail}/>
                                            </div>
                                            <div className="Column6">
                                                <Field label={"Nome"} typeInput={"text"} typeOfField={"input"} classe={"nomeInput"} get={nome} set={setNome}/>
                                            </div>
                                        </div>
                                        <div className="ColumnField">
                                            <div className="Column12">
                                                <Field label={"Sua mensagem"} typeInput={"textarea"} typeOfField={"textarea"} classe={"obsInput"} get={obs} set={setObs}/>
                                            </div>
                                        </div>
                                        <div className="ColumnField">
                                            <div className="BtnEnviarComentario">
                                                <button type="button" className="btn btn-primary"   onClick={handleEnviarComentario}>Enviar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>

        </div>
    )
}

export default Contato;