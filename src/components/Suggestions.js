import Suggestion from './Suggestion';

export default function Suggestions() {
    const follow = "Segue você";
    const newOn = "Novo no Instagram";

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Suggestion text="bad.vibes.memes" urlImg="assets/img/bad.vibes.memes.svg" reason={follow} />
            <Suggestion text="chibirdart" urlImg="assets/img/chibirdart.svg" reason={follow} />
            <Suggestion text="razoesparaacreditar" urlImg="assets/img/razoesparaacreditar.svg" reason={newOn}/>
            <Suggestion text="adorable_animals" urlImg="assets/img/adorable_animals.svg" reason={follow}/>
            <Suggestion text="smallcutecats" urlImg="assets/img/smallcutecats.svg" reason={follow}/>
        </div>
    );
}