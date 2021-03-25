import React, { useEffect } from 'react';
import Client from '../components/api';
import Card from '../components/Card';

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

  return <div>This is the game</div>;
};

export default Game;
