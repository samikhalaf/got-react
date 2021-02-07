import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../../index.scss';

import './HousesDetailPage.scss';

export default function HousesDetailPage() {
  const [house, setHouse] = useState([useParams().house]);
  console.log(useParams());

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + `houses/${house}`)
      .then((res) => {
        setHouse(res.data);
        console.log(house);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(house);

  return (
    <div className="detail-container">
      <div className="detail-header">
        <img className="detail-header--image" src={house[0].logoURL} alt={house[0].name} />
        <h3 className="detail-header--name got-font">{house[0].name}</h3>
      </div>

      <div className="detail-data">
        <div className="data-block">
          <h3 className="detail-data--title got-font">Lema</h3>
          <p>{house[0].words ? house[0].words : 'Desconocido'}</p>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Sede</h3>
          {house[0].seat?.map((seat, index) => (
            <p>{seat}</p>
          ))}
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Region</h3>
          {house[0].region ? house[0].region.map((reg, index) => <p>{reg}</p>) : <p>Desconocida</p>}
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Alianzas</h3>
          {house[0].allegiance?.map((alleg, index) => (
            <p>{alleg}</p>
          ))}
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Religiones</h3>
          {house[0].religion?.map((relig, index) => (
            <p>{relig ? relig : 'Desconocido'}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
