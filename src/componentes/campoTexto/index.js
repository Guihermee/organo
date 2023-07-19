import './campoTexto.css'

const CampoTexto = (props) => {
    console.log(props.label);
    return (
        <div>
            <div className="campo-texto">
                <label>{props.label}</label>
                <input placeholder={props.placeholder} />
            </div>
        </div>
    )
};

export default CampoTexto;