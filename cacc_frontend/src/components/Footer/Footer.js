import { FaDiscord, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {

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
        <div className="Footer">
            <div className="FirstLayer">
                <div className="FirstLayerBox">
                    <div className="ColumnBox">
                        <div className="Column4">
                            <div className="TextBox">
                                <div className="TitleBox">
                                    <h2>Sobre nós</h2>
                                </div>
                                <div className="ContentBox">
                                    <p>Estamos aqui para lhes atender da melhor forma possível para que assim, consigam finalizar o curso de Cîencia da Computação da forma mais satisfatória possível!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="Column4">
                            <div className="TextBox">
                                <div className="TitleBox">
                                    <h2>Mídias Sociais</h2>
                                </div>
                                <div className="ContentBox">
                                    <div className="Text">
                                        <p>Encontre-nos nas redes sociais e fique por dentro de nossas atualizações.</p>
                                    </div>
                                    <div className="Icons">
                                        <FaInstagram onClick={() => { handleClickRedeSocial("I") }}/>
                                        <FaWhatsapp onClick={() => { handleClickRedeSocial("W") }}/>
                                        <FaDiscord onClick={() => { handleClickRedeSocial("D") }}/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="Column4">
                            <div className="TextBox">
                                <div className="TitleBox">
                                    <h2>Contato por e-mail</h2>
                                </div>
                                <div className="ContentBox">
                                <div className="Text">
                                        <p>Encontre-nos nas redes sociais e fique por dentro de nossas atualizações.Você pode entrar em contato conosco também através do nosso e-mail!</p>
                                    </div>
                                    <div className="Email">
                                        <a href="mailto:cacc.univali@gmail.com">cacc.univali@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SecondLayer">
                <div className="ColumnBox">
                    <div className="Column6">
                        <h4>2022 © CACC - Todos os direitos reservados.</h4>
                        <p>Copyright UNIVALI 2022</p>
                    </div>
                    <div className="Column6">
                        <Link to="/inicio"><img className="LogoImage"/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;