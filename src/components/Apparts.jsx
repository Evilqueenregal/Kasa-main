import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../datas/datas.json';
import Collapsible from './Collapsible';
import Carousel from './Carousel';
import Error from '../pages/Error';
import Rating from './Rating';


function Logement() {
    // Récupérer l'ID du logement à partir de l'URL
    const { id } = useParams();

    // Rechercher les détails du logement correspondant dans datas.json
    const logement = datas.find(item => item.id === id);

      // Vérifier si le logement existe
      if (!logement) {
        return <Error />;
    }

    

     // Afficher les détails du logement
     return (
        <div className="logement">
            <Carousel pictures={logement.pictures} />
            <div className="description">
            <div className="description-info">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <ul className="no-bullets">
                {logement.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            </div>
            <div className="host-rating">
            <div className="badge">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <Rating rating={logement.rating} onRatingChange={logement.rating} />
            </div>
           
            </div>
            <div className='collapsible-container'>
            <Collapsible title="Description">
                <p>{logement.description}</p>
            </Collapsible>
            <Collapsible title="Équipements">
                <ul className="info">
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapsible>
            </div>
        </div>
    );
}

export default Logement;
