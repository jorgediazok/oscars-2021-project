import React from 'react';
import '../styles/Hero.css';
import Video from '../videos/video1.mp4';
import { useHistory } from 'react-router-dom';

const Hero = () => {
  const history = useHistory();

  return (
    <div className="heroContainer">
      <div className="heroBackground">
        <video
          className="video"
          src={Video}
          autoPlay
          loop
          muted
          type="video/mp4"></video>
      </div>
      <div className="heroContent">
        <h1 className="title">OSCARS 2021</h1>
        <p className="description">Participá. Jugá. Elegí a los ganadores.</p>
        <div className="btnWrapper">
          <button
            className="callToAction"
            onClick={() => history.push('/jugar')}>
            JUGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
