import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <h4>Direction du Centre Hospitalo-Universitaire Ibn Sina</h4>
                <p>
                    Rue Lamfadel Cherkaoui<br />
                    Rabat - Institut B.P 6527<br />
                    Maroc<br />
                    Téléphone : +212 537 676 464<br />
                    Fax : +212 537 775 856<br />
                    <a href="mailto:webmaster@chis.ma">webmaster@chis.ma</a>
                </p>
            </div>
            <div className="footer-section">
                <h4>Informations</h4>
                <ul>
                    <li><a href="#!">Appels d'Offres</a></li>
                    <li><a href="#!">Appels à Candidature</a></li>
                    <li><a href="#!">Examens Professionnels</a></li>
                    <li><a href="#!">Concours de Recrutement</a></li>
                    <li><a href="#!">Médias Audiovisuels</a></li>
                    <li><a href="#!">Carrefours Hospitaliers</a></li>
                    <li><a href="#!">Bulletins d'information</a></li>
                    <li><a href="#!">Rapports d'Activité</a></li>
                    <li><a href="#!">Projets de Plan d'Action</a></li>
                    <li><a href="#!">Brochures & Dépliants</a></li>
                    <li><a href="#!">Photothèque</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Hôpitaux</h4>
                <ul>
                    <li><a href="#!">Hôpital Ibn Sina</a></li>
                    <li><a href="#!">Hôpital des Spécialités</a></li>
                    <li><a href="#!">Hôpital des Enfants</a></li>
                    <li><a href="#!">Institut National d’Oncologie</a></li>
                    <li><a href="#!">Hôpital de Maternité Souissi</a></li>
                    <li><a href="#!">Hôpital de Maternité et Santé Reproductrice les Orangers</a></li>
                    <li><a href="#!">Hôpital Moulay Youssef</a></li>
                    <li><a href="#!">Centre de Consultations et de Traitements Dentaires</a></li>
                    <li><a href="#!">Hôpital Al Ayachi</a></li>
                    <li><a href="#!">Hôpital Ar-Razi Salé</a></li>
                </ul>
            </div>
            <div className="footer-copy">
                <p>© 2022 - Centre Hospitalo-Universitaire Ibn Sina - CHUIS</p>
            </div>
        </footer>
    );
}
