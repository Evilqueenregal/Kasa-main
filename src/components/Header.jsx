import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function Header() {
  return (
    <header>
      <nav className="menu">
        <img src={Logo} alt="logo" />
        <div className='navbar'>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;