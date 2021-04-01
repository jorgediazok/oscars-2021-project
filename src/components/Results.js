import React from 'react';
import '../styles/Results.css';

const Results = ({ movies }) => {
  return (
    <div className="results">
      <div className="content">
        <p>{movies}</p>
      </div>
    </div>
  );
};

export default Results;
