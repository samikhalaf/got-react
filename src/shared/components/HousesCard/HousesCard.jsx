import React from 'react';
import { Link } from 'react-router-dom';

import '../../../index.scss';
import './HousesCard.scss';

export default function HousesCard(props) {
  return (
    <div className="house-card--container">
      {props.houses.map((house, index) => (
        <figure className="house-card">
          <Link to={`./house/${house.name}`}>
            <p className="house-card--title">{house.name}</p>
            <img className="house-card--image" src={house.image} alt={house.name} />
          </Link>
        </figure>
      ))}
    </div>
  );
}
