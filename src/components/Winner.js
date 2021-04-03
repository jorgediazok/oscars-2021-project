import React from 'react';
import OscarSvg from '../images/oscar2.svg';
import '../styles/Winner.css';

const Winner = ({ movie }) => {
  return (
    <div className="box">
      <img src={OscarSvg} alt="" className="imageWinner" />
      <h2>{movie}</h2>
      <p>categoría</p>
    </div>
  );
};

export default Winner;
