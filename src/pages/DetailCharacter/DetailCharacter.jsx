import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import '../../index.scss';
import './DetailCharacter.scss';

export default function DetailCharacter() {
  const [character, setCharacter] = useState([useParams().character]);
  console.log(useParams());

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
    <div className="detail-container">
      <div className="detail-header">
        <img className="detail-header--image" src={character.image} alt={character.name} />
        <h3 className="detail-header--name got-font">{character.name}</h3>
      </div>

      <div className="detail-data">
        
        <div className="data-block">
          <h3 className="detail-data--title got-font">{character.house}</h3>
          <img src="" alt="" />
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Alianzas</h3>

          {character.allegiances?.map((alleg, index) => (
            <p>{alleg}</p>
          ))}
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Apariciones</h3>
          <SimpleBar style={{ maxHeight: 300 }}>
            {character.appearances?.map((appear, index) => (
              <p>- {appear}</p>
            ))}
          </SimpleBar>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Padre</h3>
          <p>{character.father}</p>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Madre</h3>

          <p>{character.mother}</p>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Descendientes</h3>
          <p>ni puta idea</p>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Titulos</h3>
          <SimpleBar style={{ maxHeight: 300 }}>
            {character.titles?.map((title, index) => (
              <p>{title}</p>
            ))}
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}
