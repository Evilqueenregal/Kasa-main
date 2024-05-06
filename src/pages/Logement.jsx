import datas from "../datas/datas.json";
import Apparts from '../components/Apparts';

function Logement(){
    return(
       
        <div className="logements">
        {datas.map((datas) => (
            <Apparts datas={datas} key={datas.id}/>
        ))}
        </div>
    )
}

export default Logement;