import React from 'react';
// import Link from 'react-router-dom';

import BackButton from '../BackButton/BackButton';

import '../../../index.scss';
import './Header.scss';

export default function Header() {
  return (
    <header className="header-container">
      <input type="text" />
      <div className="header-buttons">
        <p>hola jeje</p>
        <BackButton></BackButton>
      </div>
    </header>
  );
}
