import { useState } from 'react';

export default function User() {
    const [userName, setUserName] = useState("catanacomics");
    const [userIcon, setUserIcon] = useState("assets/img/catanacomics.svg");

    return (
        <div className="usuario">
            <img src={userIcon} alt="imagem de perfil" data-test="profile-image" onClick={() =>
                setUserIcon(prompt('Cole o link da imagem aqui') || userIcon)
            } />
            <div className="texto">
                <span>
                    <strong data-test="name">{userName}</strong>
                    <ion-icon name="pencil" data-test="edit-name" onClick={() =>
                        setUserName(prompt('Nome') || userName)
                    }></ion-icon>
                </span>
            </div>
        </div>
    );
}