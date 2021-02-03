import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import HousesCard from '../../shared/components/HousesCard/HousesCard';

import './HousesPage.scss';
import NavBar from '../../shared/components/NavBar/NavBar';

let allHouses = [];

export default function HousesPage() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + 'houses/')
      .then((res) => {
        allHouses = res.data;
        setHouses(allHouses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(allHouses);

  return (
    <div className="houses-page">
      <SimpleBar style={{ maxHeight: 950 }}>
        <div className="houses-container">
          <HousesCard houses={houses} />
        </div>
      </SimpleBar>
      <NavBar />
    </div>
  );
}
