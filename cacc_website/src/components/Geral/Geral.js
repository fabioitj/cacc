import { useState } from "react";
import Body from "../Body/Body"
import Navbar from "../Header/Navbar/Navbar"
import "./Geral.css";

const Geral = () => {
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
        <div className="Geral">
            <Navbar scrollPage={scrollPage}/>
            <Body className="GeralBody" scrollPage={scrollPage}/>
        </div>
    )
}

export default Geral;