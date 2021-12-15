import React from 'react';
import '../styles/Results.css';
import Winner from '../components/Winner';
import { useHistory } from 'react-router-dom';

const Results = ({ movies }) => {
  const history = useHistory();

  return (
    <div className='results'>
      <h1 className='results_title'>
        Tus Elegidos
        <img
          src='https://i.ibb.co/mvGSpVV/oscar.png'
          alt=''
          className='oscar-image'
        />
      </h1>
      <button className='results__button' onClick={() => history.go(0)}>
        Jugar Otra Vez
      </button>
      <div className='containerWinner'>
        {movies.map((movie, i) => (
          <Winner movie={movie.pelicula} categoria={movie.categoria} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Results;
