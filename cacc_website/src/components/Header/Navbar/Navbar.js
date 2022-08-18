import { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const [scrollPage, setScrollPage] = useState(false);
    window.onscroll = () => { 
        let offSetScreen = window.pageYOffset;
        console.log(offSetScreen);
        if(offSetScreen > 100)
            setScrollPage(true);
        else
            setScrollPage(false);
    };

    return (
        <div className={!scrollPage ? "Navbar" : "Navbar NavbarScrolled"}>
            <div className={!scrollPage ? "LogoBox" : "LogoBox LogoBoxScrolled"}>
                <Link to="/inicio"><img className={!scrollPage ? "LogoImage" : "LogoImage LogoImageScrolled"}/></Link>
            </div>
            <div className={!scrollPage ? "UBox" : "UBox UBoxScrolled"}>
                <ul>
                    <li><Link className="UBoxLink" to="/inicio">Início</Link></li>
                    <li><Link className="UBoxLink" to="/eventos">Eventos</Link></li>
                    <li><Link className="UBoxLink" to="/contato">Contato</Link></li>
                    <li><Link className="UBoxLink" to="/quem_somos">Quem somos</Link></li>
                    <li><Link className="UBoxLink" to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );

}

export default Navbar;