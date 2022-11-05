import "./field.css";

const Field = ({label, classe, typeInput, typeOfField, get, set, children}) => {
    let placeholder = label + "...";



    return (
        <div className="Field">
            
            {
                typeOfField == "input" &&
                <>
                    <input className={classe} type={typeInput} value={get} onChange={(e) => { set(e.target.value)}} placeholder={placeholder}/>
                </>
            }
            {
                typeOfField == "textarea" &&
                <>
                    <textarea className={classe} value={get} onChange={(e) => { set(e.target.value )}} placeholder={placeholder}></textarea>
                </>
                
            }
            {
                typeOfField == "select" &&
                <>
                    <select className={classe} value={get} onChange={(e) => { set(e.target.value )}} placeholder={placeholder}>
                        <option selected disabled value="">Selecione um Cargo</option>
                        {children}
                    </select>
                </>
            }
        </div>
    );
}

export default Field;