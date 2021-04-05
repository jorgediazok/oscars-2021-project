import React from 'react';
import '../styles/Card.css';

const Card = ({
  pelicula,
  classname,
  image,
  onClick,
  nameVariable,
  categoria,
}) => {
  return (
    <div
      className={`container ${classname}`}
      id={`${pelicula}-${categoria}`}
      onClick={onClick}>
      <div className="card">
        <img src={`http:${image}`} alt="" />
        <div className="details">
          <h2>{pelicula}</h2>
          <div className="name">
            <p>{nameVariable}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
