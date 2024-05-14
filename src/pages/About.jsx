import React, { useState } from 'react';
import Banner from "../components/Banner";

function About() {
    const [isFiabiliteOpen, setFiabiliteOpen] = useState(false);
    const [isRespectOpen, setRespectOpen] = useState(false);
    const [isServiceOpen, setServiceOpen] = useState(false);
    const [isSecuriteOpen, setSecuriteOpen] = useState(false);

    const toggleFiabilite = () => {
        setFiabiliteOpen(!isFiabiliteOpen);
    };

    const toggleRespect = () => {
        setRespectOpen(!isRespectOpen);
    };

    const toggleService = () => {
        setServiceOpen(!isServiceOpen);
    };

    const toggleSecurite = () => {
        setSecuriteOpen(!isSecuriteOpen);
    };

    return(
        <div className="about">
            <Banner imagePath="src/assets/banner2.jpg" />

            <div className="section">
                <button onClick={toggleFiabilite}>Fiabilité</button>
                {isFiabiliteOpen && (
                    <div className="content">
                       <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées par nos équipes</p>
                    </div>
                )}
            </div>
            <div className="section">
                <button onClick={toggleRespect}>Respect</button>
                {isRespectOpen && (
                    <div className="content">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du 
                            voisinage entraînera une exclusion de notre plate forme.
                        </p>
                    </div>
                )}
            </div>
            <div className="section">
                <button onClick={toggleService}>Service</button>
                {isServiceOpen && (
                    <div className="content">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du 
                            voisinage entraînera une exclusion de notre plate forme.</p>
                    </div>
                )}
            </div> 
            <div className="section">
                <button onClick={toggleSecurite}>Sécurité</button>
                {isSecuriteOpen && (
                    <div className="content">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
                            les voyageurs, chaque logement correspond aux critères de sécurité établis 
                            par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                            cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                )}
            </div>
        </div>
       
    );
}
 
export default About;

