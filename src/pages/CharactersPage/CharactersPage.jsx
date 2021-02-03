import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import CharacterCard from '../../shared/components/CharacterCard/CharacterCard';

import './CharactersPage.scss';

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
    <SimpleBar style={{ maxHeight: 950 }}>
      <div className="character-container">
        <CharacterCard characters={characters} />
      </div>
    </SimpleBar>
  );
}
