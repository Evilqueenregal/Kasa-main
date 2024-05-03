import datas from "../datas/datas.json";
import Banner from "../components/Banner";
import Thumb from '../components/Thumbs';

function Home(){
    return(
    <div className="home">
        <Banner imagePath="src/assets/banner1.jpg" altText="banner1" title="Chez vous, partout et ailleurs" />
        <div className="gallery">
        {datas.map((datas) => (
            <Thumb datas={datas} key={datas.id}/>
        ))}
        </div>
    </div>
    )
}

export default Home;

