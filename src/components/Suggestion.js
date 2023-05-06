export default function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.urlImg} alt={props.text} />
                <div className="texto">
                    <div className="nome">{props.text}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}