import React from 'react';
import presentation_picture from "../assets/images/OIP.jpg";
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="presentation_picture">
                <img src={presentation_picture} alt="présentation" height={350} />
            </div>
            <div>
                <h2 className="home_title">Présentation</h2>
                <p className="home_description">
                    Le cancer du sein est l'un des cancers les plus courants chez les femmes.
                    Les facteurs de risque incluent l'âge, les antécédents familiaux de cancer du sein,
                    le manque d'exercice physique, et d'autres facteurs liés au mode de vie.
                    Il est crucial de pratiquer l'auto-examen des seins régulièrement et de subir
                    des mammographies de dépistage selon les recommandations médicales.
                    Cette section vise à vous informer sur les meilleures pratiques pour la prévention
                    et la détection précoce du cancer du sein.
                </p>
            </div>
        </>
    );
}
