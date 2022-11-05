import { useEffect, useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = ({ scrollPage }) => {

    // console.log("androidPage: ", androidPage);
    const [androidPage, setAndroidPage] = useState(false);
    useEffect(() => {
        let width = window.screen.width;
        console.log("width: ", width);
        if (width <= 700)
            setAndroidPage(true);
        else
            setAndroidPage(false);

        const links = document.getElementsByClassName("nav-item");
        for (const link of links) {
            link.onclick = () => {
                document.getElementById("btnToggler").click();
            }
        }
    });

    return (
        <nav className={!scrollPage ? "navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-light bg-light NavbarScrolled"} >
            <div className="container-fluid">
                <a className="navbar-brand"><Link to="/inicio"><img className={!scrollPage ? "LogoImage" : "LogoImage LogoImageScrolled"} /></Link></a>
                <button id="btnToggler" className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={!androidPage ? "navbar-nav me-auto mb-2 mb-lg-0" : "navbar-nav me-auto mb-2 mb-lg-0 navbar-android"}>
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><Link className="UBoxLink" to="/eventos">Eventos</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link className="UBoxLink" to="/contato">Contato</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link className="UBoxLink" to="/quem_somos">Quem somos</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link className="UBoxLink" to="/login">Login</Link></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;