import React from 'react';
import '../styles/Results.css';
import Winner from '../components/Winner';
import Oscar from '../images/oscar.png';
import { useHistory } from 'react-router-dom';

const Results = ({ movies }) => {
  const history = useHistory();

  console.log(movies);

  return (
    <div className="results">
      <h1 className="results_title">
        Tus Elegidos <img src={Oscar} alt="" className="oscar-image" />
      </h1>
      <button className="results__button" onClick={() => history.go(0)}>
        Jugar Otra Vez
      </button>
      <div className="containerWinner">
        {movies.map((movie, i) => (
          <Winner movie={movie} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Results;
