import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBarAdmin.css";

const SideBarAdmin = () => {

    return (
        <div className="SideBarAdmin">

            <div className="SideBarLogoBox">
                <img className="SideBarLogo"/>
            </div>

            <div className="SideBarActions">
                {/* <Link to="/admin/publicacoes"><a href="#"><span>Publicações</span></a></Link> */}
                <Link to="/admin/eventos"><a href="#"><span>Eventos</span></a></Link>
                <Link to="/admin/mensagens"><a href="#"><span>Mensagens</span></a></Link>
                <Link to="/admin/contas"><a href="#"><span>Contas</span></a></Link>
                <Link to="/admin/diretoria"><a href="#"><span>Diretoria</span></a></Link>
                <Link to="/admin/cargos"><a href="#"><span>Cargos</span></a></Link>
            </div>    
        </div>
    );
}

export default SideBarAdmin;