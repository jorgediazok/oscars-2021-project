import React from 'react';
import '../styles/Results.css';
import Winner from '../components/Winner';
import Oscar from '../images/oscar.png';

const Results = ({ movies }) => {
  console.log(movies);

  return (
    <div className="results">
      <h1 className="results_title">
        Tus Elegidos <img src={Oscar} alt="" className="oscar-image" />
      </h1>
      <div className="containerWinner">
        {movies.map((movie) => (
          <Winner movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Results;
