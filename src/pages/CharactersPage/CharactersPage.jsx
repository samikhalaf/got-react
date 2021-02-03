import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import CharacterCard from '../../shared/components/CharacterCard/CharacterCard';

import './CharactersPage.scss';
import '../../index.scss';
import NavBar from '../../shared/components/NavBar/NavBar';

let allCharacters = [];

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + 'characters/')
      .then((res) => {
        allCharacters = res.data;
        setCharacters(allCharacters);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="character-page">
      <SimpleBar style={{ maxHeight: 950 }}>
        <div className="character-container">
          <CharacterCard characters={characters} />
        </div>
      </SimpleBar>
      <NavBar />
    </div>
  );
}
