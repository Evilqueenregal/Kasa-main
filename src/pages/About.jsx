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
                        {/* Contenu de la section Description */}
                    </div>
                )}
            </div>
            <div className="section">
                <button onClick={toggleRespect}>Respect</button>
                {isRespectOpen && (
                    <div className="content">
                        {/* Contenu de la section Host */}
                    </div>
                )}
            </div>
            <div className="section">
                <button onClick={toggleService}>Service</button>
                {isServiceOpen && (
                    <div className="content">
                        {/* Contenu de la section Host */}
                    </div>
                )}
            </div> 
            <div className="section">
                <button onClick={toggleSecurite}>Sécurité</button>
                {isSecuriteOpen && (
                    <div className="content">
                        {/* Contenu de la section Host */}
                    </div>
                )}
            </div>
        </div>
       
    );
}
 
export default About;

