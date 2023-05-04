export default function Story(props) {
    return (
        <div>
            <div class="story">
                <div class="imagem">
                    <img src={props.urlImg} alt={props.text} />
                </div>
                <div class="usuario">
                    {props.text}
                </div>
            </div>
        </div>
    );
}