import { useParams } from 'react-router-dom';
import datas from "../datas/datas.json";
import Apparts from '../components/Apparts';
// import Carousel from "../components/Carousel";

function Logement(){
    const { id } = useParams();
    const logement = datas.find(data => data.id === id);

    return(
        <div className="logements">
            <Apparts datas={datas} key={datas.id}/>
            {/* <Carousel pictures={Logement.pictures} /> */}
        </div>
    )
}

export default Logement;