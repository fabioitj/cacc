import "./QuemSomosRow.css"

const QuemSomosRow = ({src, title, subtitle, apresentation, isReverse}) => {
 
    
    return (
        <div className={!isReverse ? "QuemSomosRow" : "QuemSomosRowReverse"}>
            <div className="QuemSomosColumnImage">
                <img src={src}/>
            </div>
            <div className="QuemSomosColumnInfo">
                <div className="RowInfo">                            
                    <div className="RowTitle">
                        <h2>{title}</h2>
                    </div>
                    <div className="RowSubTitle">
                        <h4>{subtitle}</h4>
                    </div>  
                    <div className="RowApresentation">
                        <p>{apresentation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuemSomosRow;