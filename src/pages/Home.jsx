import datas from "../datas/datas.json";
import Thumb from '../components/Thumbs';

function Home(){
    return(
    <div className="home">
        <div className="banner">
            <img src="src\assets\banner1.jpg" alt="banner" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">
        {datas.map((datas) => (
            <Thumb datas={datas} key={datas.id}/>
        ))}
        </div>
    </div>
    )
}

export default Home;

