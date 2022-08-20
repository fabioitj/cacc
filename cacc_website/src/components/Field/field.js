import "./field.css";

const Field = ({label, classe, typeInput, typeOfField, get, set}) => {
    let placeholder = label + "...";



    return (
        <div className="Field">
            
            {
                typeOfField == "input" &&
                <>
                    {/* <label>{label}</label> */}
                    <input className={classe} type={typeInput} value={get} onChange={(e) => { set(e.target.value)}} placeholder={placeholder}/>
                </>
            }
            {
                typeOfField == "textarea" &&
                <>
                    {/* <label>{label}</label> */}
                    <textarea className={classe} value={get} onChange={(e) => { set(e.target.value )}} placeholder={placeholder}></textarea>
                </>
                
            }
        </div>
    );
}

export default Field;