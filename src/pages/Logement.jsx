import datas from "../datas/datas.json";
import Apparts from '../components/Apparts';

function Logement(){
    return(
        <div className="logements">
            <Apparts datas={datas} key={datas.id}/>
        </div>
    )
}

export default Logement;