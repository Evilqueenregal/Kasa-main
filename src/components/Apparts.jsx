
import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../datas/datas.json';

function Logement() {
    // Récupérer l'ID du logement à partir de l'URL
    const { id } = useParams();

    // Rechercher les détails du logement correspondant dans datas.json
    const logement = datas.find(item => item.id === id);

    // Vérifier si le logement existe
    if (!logement) {
        return <div>Logement introuvable</div>;
    }

    // Afficher les détails du logement
    return (
        <div className="logement">
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.description}</p>
            <h2>Équipements</h2>
            <ul>
                {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
            <h2>Tags</h2>
            <ul>
                {logement.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <h2>Localisation</h2>
            <p>{logement.location}</p>
            <h2>Hôte</h2>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
        </div>
    );
}

export default Logement;
