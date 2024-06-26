import Banner from "../components/Banner";
import Collapse from '../components/Collapsible';

function About() {
    
    return(
        <div className="about">
        <div className="banner2">
        <Banner imagePath="src/assets/banner2.jpg" />
        </div>
        <div className="indication">
            <Collapse
                title="Fiabilité" 
                children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
            />
              <Collapse
                title="Respect"
                children="La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du 
                voisinage entraînera une exclusion de notre plate forme."
            />
                <Collapse
                title="Service"
                children="La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du 
                voisinage entraînera une exclusion de notre plate forme."
            /> 
                <Collapse
                title="Sécurité"
                children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
                les voyageurs, chaque logement correspond aux critères de sécurité établis 
                par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            /> 
            </div>
        </div>
       
    );
}
 
export default About;

