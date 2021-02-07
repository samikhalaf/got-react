import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import '../../index.scss';

import './HousesDetailPage.scss';

export default function HousesDetailPage() {
  const [house, setHouse] = useState([useParams().house]);
  console.log(useParams());

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + `house/${house}`)
      .then((res) => {
        setHouse(res.data);
        console.log(house);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="detail-container">
      <div className="detail-header">
        <img className="detail-header--image" src={house.image} alt={house.name} />
        <h3 className="detail-header--name got-font">{house.name}</h3>
      </div>

      <div className="detail-data">
        <div className="data-block">
          <h3 className="detail-data--title got-font">{house.house}</h3>
          <img src="" alt="" />
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Alianzas</h3>

          {house.allegiances?.map((alleg, index) => (
            <p>{alleg}</p>
          ))}
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Apariciones</h3>
          <SimpleBar style={{ maxHeight: 300 }}>
            {house.appearances?.map((appear, index) => (
              <p>- {appear}</p>
            ))}
          </SimpleBar>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Padre</h3>
          <p>{house.father}</p>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Madre</h3>

          <p>{house.mother}</p>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Descendientes</h3>
          <p>ni puta idea</p>
        </div>

        <div className="data-block">
          <h3 className="detail-data--title got-font">Titulos</h3>
          <SimpleBar style={{ maxHeight: 300 }}>
            {house.titles?.map((title, index) => (
              <p>{title}</p>
            ))}
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}
