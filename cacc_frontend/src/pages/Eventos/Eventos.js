import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { getEventos } from "../../hooks/eventosApi";
import EventoCard from "./EventoCard/EventoCard";
import "./Eventos.css";

const Eventos = () => {

    const [eventList, setEventList] = useState([]);

    const [emptyList, setEmptyList] = useState(eventList.length == 0);

    useEffect(() => {
        getEventos()
            .then(response => {
                let data = response.data;
                console.log(data);
                if(data.success){   
                    setEventList(data.data);
                }
            })
            .catch(err => alert(err));
    }, []);

    useEffect(() => {
        setEmptyList(eventList.length == 0);
    }, [eventList])


    return (
        <div className={!emptyList ? "Eventos" : "EventosEmpty"}>
            <div className="EventosBox">
                <div className="EventosBoxHeader">
                    <h2>EVENTOS</h2>
                </div>
                <div className="EventosBoxBody">
                    {   
                        !emptyList ? 
                            eventList.map(function(item, i) {
                                return (
                                    <EventoCard imagem={item.imagem} title={item.titulo} subtitle={item.subtitulo}/>
                                )
                            })
                            :
                            <h2><b>Ops... </b>Parece que estamos sem eventos.</h2>
                    }
                </div>
            </div>
        </div> 
    );
}

export default Eventos;