import { useState } from "react";
import Body from "../Body/Body"
import Navbar from "../Header/Navbar/Navbar"
import Footer from "../Footer/Footer.js";
import "./Geral.css";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import ParticlesComp from "../Particles/Particles";

const Geral = () => {
    const [scrollPage, setScrollPage] = useState(false);
    window.onscroll = () => { 
        let offSetScreen = window.pageYOffset;
        console.log(offSetScreen);
        if(offSetScreen > 50)
            setScrollPage(true);
        else
            setScrollPage(false);
    };



    return (
        <div className="Geral">
            
                <Navbar scrollPage={scrollPage}/>
                <Body className="GeralBody" scrollPage={scrollPage}/>
                <Footer/>
        </div>
    )
}

export default Geral;