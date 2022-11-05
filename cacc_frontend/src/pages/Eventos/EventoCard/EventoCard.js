import "./EventoCard.css";

const EventoCard = ({imagem, title, subtitle}) => {
    // const url = "https://static.wixstatic.com/media/269e7e_afb211bb64254b7a920bb1430933139d~mv2.jpg/v1/fill/w_1600,h_720,al_c,q_85,enc_auto/269e7e_afb211bb64254b7a920bb1430933139d~mv2.jpg";

    return (
        <div className="EventoCard">
            <div className="EventoCardBox">
                <img src={imagem}/>
                <div className="EventoCardBoxInfo">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div> 
    )
}

export default EventoCard;