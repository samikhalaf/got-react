import React from 'react';

import '../../index.scss';
import NavBar from '../../shared/components/NavBar/NavBar';
import './HomePage.scss';

export default function HomePage() {
  return (
    <div className="home">
      <h1 className="home-title">#</h1>
      <NavBar />
    </div>
  );
}
