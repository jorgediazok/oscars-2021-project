import React, { useEffect, useState } from 'react';
import Client from '../components/api';
import Card from '../components/Card';
import '../styles/Game.css';

const Game = () => {
  const [data, setData] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await Client.getEntries({
          content_type: 'oscars2021',
        });
        const data = response.items;
        setData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const onClickHandler = (e) => {
    console.log(e.currentTarget.id);
    setCurrentCategoryIndex(currentCategoryIndex + 1);
  };

  return (
    <>
      <div className="container">
        {data.map((categoria, i) => {
          return (
            <>
              <div className="category-container">
                <h1
                  className={
                    i === currentCategoryIndex ? 'category' : 'card-hidden'
                  }>
                  {categoria.fields.category}
                </h1>
              </div>

              <Card
                image={categoria.fields.image.fields.file.url}
                pelicula={categoria.fields.movie1}
                key="movie1"
                classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                onClick={onClickHandler}
                nameVariable={categoria.fields.name1}
              />
              <Card
                image={categoria.fields.image2.fields.file.url}
                pelicula={categoria.fields.movie2}
                key="movie2"
                classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                onClick={onClickHandler}
                nameVariable={categoria.fields.name2}
              />
              <Card
                image={categoria.fields.image3.fields.file.url}
                pelicula={categoria.fields.movie3}
                key="movie3"
                classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                onClick={onClickHandler}
                nameVariable={categoria.fields.name3}
              />
              <Card
                image={categoria.fields.image4.fields.file.url}
                pelicula={categoria.fields.movie4}
                key="movie4"
                classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                onClick={onClickHandler}
                nameVariable={categoria.fields.name4}
              />
              <Card
                image={categoria.fields.image5.fields.file.url}
                pelicula={categoria.fields.movie5}
                key="movie5"
                classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                onClick={onClickHandler}
                nameVariable={categoria.fields.name5}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Game;
