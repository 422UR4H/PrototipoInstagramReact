export default function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.urlImg} alt={props.text} />
                <div class="texto">
                    <div class="nome">{props.text}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}