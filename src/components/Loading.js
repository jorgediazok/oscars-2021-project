import React from 'react';
import Spinner from '../videos/loading.gif';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loadingChild">
        <Spinner />
      </div>
    </div>
  );
};

export default Loading;
