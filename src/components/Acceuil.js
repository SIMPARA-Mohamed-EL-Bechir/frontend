import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'avoir React Router installé et configuré
import './Acceuil.css';
import Ino from "../assets/images/INO.jpg";
import Localisation from "../assets/images/plan_situation.jpg";

export default function Acceuil() {
    return (
        <div className="container">
            <div>
                <h3>Institut National d'Oncologie "Sidi Mohammed Ben Abdellah"</h3>
            </div>
            <div className="ino_picture">
                <p>
                    <img src={Ino} alt="INO" height={400} />
                </p>
            </div>
            <div>
                <h3>Localisation</h3>
            </div>
            <div className="localisation_picture">
                <img src={Localisation} alt="Localisation" height={235} />
            </div>
            <div className="connection_form">
                <ul className="connection_list">
                    <li className="connection_link">
                        <Link to="/signup">SignUp</Link>
                    </li>
                    <li className="connection_link">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
