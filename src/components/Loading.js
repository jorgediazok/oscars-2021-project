import React from 'react';
import '../styles/Loading.css';
import Spinner from '../videos/tail-spin.svg';

const Loading = () => {
  return (
    <div className="loading">
      <img src={Spinner} alt="" className="spinner-image" />
    </div>
  );
};

export default Loading;
