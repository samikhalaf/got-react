import React from 'react';
import { useHistory } from 'react-router-dom';

import '../../../index.scss';
import './BackButton.scss';

export default function BackButton() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <button className="back-button" onClick={() => goBack()}>
      ← BACK
    </button>
  );
}
