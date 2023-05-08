import { useState } from 'react';

export default function Post(props) {
    const [amountLike, setAmountLike] = useState(props.amountLike);
    const [like, setLike] = useState({ color: 'black' });
    const [bookmark, setBookmark] = useState("bookmark-outline");
    const [heart, setHeart] = useState("heart-outline");

    function toggleHeart() {
        setHeart(heart === "heart" ? "heart-outline" : "heart");
        setLike(like.color === "red" ? { color: "black" } : { color: "red" });
        setAmountLike(amountLike === props.amountLike ? props.amountLike + 1 : props.amountLike);
    }

    function setHeartLike() {
        setHeart("heart");
        setLike({ color: "red" });
        setAmountLike(props.amountLike + 1);
    }

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.urlUserImg} alt={props.text} />
                    {props.text}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo" data-test="post-image">
                <img onDoubleClick={setHeartLike} src={props.urlContentImg} alt={props.altContentImg} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={toggleHeart} name={heart} style={like} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmark} data-test="save-post" onClick={() =>
                            setBookmark(bookmark === "bookmark" ? "bookmark-outline" : "bookmark")
                        }></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.urlLikeImg} alt={props.textLike} />
                    <div className="texto" data-test="likes-number">
                        Curtido por <strong>{props.textLike}</strong> e <strong>outras {amountLike.toLocaleString("pt-br")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}