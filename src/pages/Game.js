import React, { useEffect } from 'react';
import Client from '../components/api';
import Card from '../components/Card';
import '../styles/Game.css';

const Game = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await Client.getEntries({
          content_type: 'oscars2021',
        });
        const data = await response.items;
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="body">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Game;
