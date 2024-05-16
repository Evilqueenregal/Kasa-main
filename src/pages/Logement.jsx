import { useParams } from 'react-router-dom';
import datas from "../datas/datas.json";
import Apparts from '../components/Apparts';

function Logement(){
    const { id } = useParams();
    const logement = datas.find(data => data.id === id);

    return(
        <div className="logements">
            <Apparts datas={datas} key={datas.id}/>
        </div>
    )
}

export default Logement;