import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Thumb ({ datas }) {
   return (
    <Link to={`/logement/${datas.id}`} className="thumb" key={datas.id}>
        <article className="logement">
            <img src={datas.cover} alt={datas.title} />
            <h3>{datas.title}</h3>
        </article>
    </Link>
   );
}

Thumb.propTypes = {
    datas: PropTypes.object.isRequired
 };
 

export default Thumb;