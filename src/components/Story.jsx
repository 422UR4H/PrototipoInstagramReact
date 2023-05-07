export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.urlImg} alt={props.text} />
            </div>
            <div className="usuario">
                {props.text}
            </div>
        </div>
    );
}