import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import '../../index.scss';
import './DetailCharacter.scss';

export default function DetailCharacter() {
  const [character, setCharacter] = useState([useParams().character]);
  console.log(useParams().character);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + `characters/${character}`)
      .then((res) => {
        setCharacter(res.data);
        console.log(character);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <SimpleBar style={{ maxHeight: 950 }}>
      <div className="detail-container">
        <div className="detail-header">
          <img className="detail-header--image" src={character.image} alt={character.name} />
          <h3 className="detail-header--name">{character.name}</h3>
        </div>

        <div className="detail-data">
          <div className="data-house">
            <img src="" alt="" />
            <p>{character.house}</p>
          </div>

          <div className="data-allegiances">
            <h3 className="detail-data--title">Alianzas</h3>

            {character.allegiances?.map((alleg, index) => (
              <p>{alleg}</p>
            ))}
          </div>

          <div className="data-appearances">
            <h3 className="detail-data--title">Apariciones</h3>
            {character.appearances?.map((appear, index) => (
              <p>{appear}</p>
            ))}
          </div>

          <div className="data-father">
            <h3 className="detail-data--title">Padre</h3>
            <p>{character.father}</p>
          </div>

          <div className="data-mother">
            <h3 className="detail-data--title">Madre</h3>

            <p>{character.mother}</p>
          </div>

          <div className="data-descents">
            <h3 className="detail-data--title">Descendientes</h3>
            <p>ni puta idea</p>
          </div>

          <div className="data-titles">
            <h3 className="detail-data--title">Titulos</h3>

            {character.titles?.map((title, index) => (
              <p>{title}</p>
            ))}
          </div>
        </div>
      </div>
    </SimpleBar>
  );
}
