import React from 'react';
import '../styles/Card.css';

const Card = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="imgBox">
          <img src="https://i.redd.it/3g7imkf5qfa61.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Image Title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam, ex?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
