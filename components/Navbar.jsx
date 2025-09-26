
import { Link } from "react-router-dom";
import "../src/styles/navbar.css"
import Contact from './Contacts';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <h2 id="logo">Joke Gen</h2>
        <h2 id='logo-sml'>JG</h2>

        <nav className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/contacts">Contact</Link>
          <button id="login-btn">Login</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar