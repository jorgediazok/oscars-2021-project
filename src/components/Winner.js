import React from 'react';
import '../styles/Winner.css';

const Winner = ({ movie, categoria }) => {
  return (
    <div className='box'>
      <div className='imageWinner-container'>
        <img
          src='https://i.ibb.co/StNS9dy/oscar2.png'
          alt=''
          className='imageWinner'
        />
      </div>

      <h2 className='box_categoria'>{categoria}</h2>
      <p className='box_movie'>{movie}</p>
    </div>
  );
};

export default Winner;
