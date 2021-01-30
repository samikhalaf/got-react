import React from 'react';
import { Link } from 'react-router-dom';

import '../../../index.scss';
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="nav">
      <Link className="nav-link got-font" to="/characters">
        Personajes
      </Link>

      <Link className="nav-link got-font" to="/houses">
        Casas
      </Link>

      <Link className="nav-link got-font" to="/chronology">
        Cronologia
      </Link>
    </nav>
  );
}
