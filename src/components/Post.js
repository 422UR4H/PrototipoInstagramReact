import { useState } from 'react';

export default function Post(props) {
    const [amountLike, setAmountLike] = useState(props.amountLike);
    const [like, setLike] = useState({ color: 'black' });
    const [bookmark, setBookmark] = useState("bookmark-outline");
    const [heart, setHeart] = useState("heart-outline");
    
    function toggleBookmark() {
        setBookmark(bookmark === "bookmark" ? "bookmark-outline" : "bookmark");
    }

    function toggleHeart() {
        setHeart(heart === "heart" ? "heart-outline" : "heart");
        setLike(like.color === "red" ? {color: "black"} : {color: "red"});
        setAmountLike(amountLike === props.amountLike ? props.amountLike + 1 : props.amountLike);
    }

    function setHeartLike() {
        setHeart("heart");
        setLike({color: "red"});
        setAmountLike(props.amountLike + 1);
    }

    return (
        <div>
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.urlUserImg} alt={props.text} />
                        {props.text}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img onClick={setHeartLike} src={props.urlContentImg} alt={props.altContentImg} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon onClick={toggleHeart} name={heart} style={like}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={toggleBookmark} name={bookmark}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.urlLikeImg} alt={props.textLike} />
                        <div class="texto">
                            Curtido por <strong>{props.textLike}</strong> e <strong>outras {amountLike} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}