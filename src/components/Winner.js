import React from 'react';
import '../styles/Winner.css';

const Winner = ({ movie, categoria }) => {
  return (
    <div className='box'>
      <img src='/images/oscar2.svg' alt='' className='imageWinner' />
      <h2 className='box_categoria'>{categoria}</h2>
      <p className='box_movie'>{movie}</p>
    </div>
  );
};

export default Winner;
