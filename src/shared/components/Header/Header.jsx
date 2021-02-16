import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Link from 'react-router-dom';

import BackButton from '../BackButton/BackButton';

import '../../../index.scss';
import './Header.scss';

export default function Header() {
  return (
    <Router>
      <header className="header-container">
        <input className="search-bar" type="text" placeholder="Buscar" />
        <div className="header-buttons">
          <BackButton></BackButton>
        </div>
      </header>
    </Router>
  );
}
