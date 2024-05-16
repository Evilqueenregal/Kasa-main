import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function Header() {
  return (
    <header>
      <nav className="menu">
        <img src={Logo} alt="logo" />
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header;