import { useState } from 'react';

export default function User() {
    let [userName, setUserName] = useState("catanacomics");
    let [userIcon, setUserIcon] = useState("assets/img/catanacomics.svg");

    return (
        <div class="usuario">
            <img src={userIcon} alt="imagem de perfil" onClick={() => setUserIcon(prompt('Cole o link da imagem aqui') || userIcon)} />
            <div class="texto">
                <span>
                    <strong>{userName}</strong>
                    <ion-icon name="pencil" onClick={() => setUserName(prompt('Nome') || userName)}></ion-icon>
                </span>
            </div>
        </div>
    );
}