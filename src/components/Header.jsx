import "./Navbar.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="menu">
      <img src="src\assets\Logo.png" alt="logo" />
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header;