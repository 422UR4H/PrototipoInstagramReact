import Suggestion from './Suggestion';

export default function Suggestions() {
    const follow = "Segue você";
    const newOn = "Novo no Instagram";
    const suggestions = [
        { text: "bad.vibes.memes", urlImg: "assets/img/bad.vibes.memes.svg", reason: follow },
        { text: "chibirdart", urlImg: "assets/img/chibirdart.svg", reason: follow },
        { text: "razoesparaacreditar", urlImg: "assets/img/razoesparaacreditar.svg", reason: newOn },
        { text: "adorable_animals", urlImg: "assets/img/adorable_animals.svg", reason: follow },
        { text: "smallcutecats", urlImg: "assets/img/smallcutecats.svg", reason: follow }
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((sugg) => (
                <Suggestion key={sugg.text} text={sugg.text} urlImg={sugg.urlImg} reason={sugg.reason} />
            ))}
        </div>
    );
}