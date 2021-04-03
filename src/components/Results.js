import React from 'react';
import '../styles/Results.css';
import Winner from '../components/Winner';

const Results = ({ movies }) => {
  console.log(movies);

  return (
    <div className="results">
      <div className="content">
        <p>
          {movies.map((movie) => (
            <Winner movie={movie} />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Results;
