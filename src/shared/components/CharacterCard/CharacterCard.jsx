import React from 'react';
import { Link } from 'react-router-dom';

import '../../../index.scss';
import './CharacterCard.scss';

export default function CharacterCard(props) {
  return (
    <div className="character-card--container">
      {props.characters.map((character, index) => (
        <figure className="character-card">
          <Link to={`./character/${character.name}`}>
            <p className="character-card--title">{character.name}</p>
            <img className="character-card--image" src={character.image} alt={character.name} />
          </Link>
        </figure>
      ))}
    </div>
  );
}
