import React from 'react';
import { Link } from 'react-router-dom';

import '../../../index.scss';
import './HousesCard.scss';

import NotFound from '../../../assets/img/404.png';

export default function HousesCard(props) {
  return (
    <div className="house-card--container">
      {props.houses.map((house, index) => (
        <figure className="house-card">
          <Link to={`./house/${house.name}`}>
            <img
              className="house-card--image"
              src={house.logoURL ? house.logoURL : NotFound}
              alt={house.name}
            />
            <p className="house-card--title">{house.name}</p>
          </Link>
        </figure>
      ))}
    </div>
  );
}
