import React from 'react'
import "../src/styles/navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <h2 id="logo">Joke Gen</h2>
        <h2 id='logo-sml'>JG</h2>

        <nav className="nav-link">
          <a href="#">Home</a>
          <a href="#">Query</a>
          <button id="login-btn">Login</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar