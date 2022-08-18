import { useState } from "react";
import { Button } from "reactstrap";
import Field from "../../components/Field/field";
import "./contato.css"


const Contato = () => {

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [obs, setObs] = useState("");

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
                })
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

    return (
        <div className="Contato">
            <div className="ContatoBox">
                <div className="ContatoBoxHeader">
                    <h2>Contato</h2>
                </div>
                <div className="ContatoBoxBody">
                    <div className="FormularioBox">
                        <div className="RowField">
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
                                    <Field label={"Observação"} typeInput={"textarea"} typeOfField={"textarea"} classe={"obsInput"} get={obs} set={setObs}/>
                                </div>
                            </div>
                            <div className="ColumnField">
                                <div className="BtnEnviarComentario">
                                    <Button color="primary" onClick={handleEnviarComentario}>Enviar</Button>
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