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
          if (categoria.fields.category !== 'Mejor Película') {
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
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name1}
                />
                <Card
                  image={categoria.fields.image2.fields.file.url}
                  pelicula={categoria.fields.movie2}
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name2}
                />
                <Card
                  image={categoria.fields.image3.fields.file.url}
                  pelicula={categoria.fields.movie3}
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name3}
                />
                <Card
                  image={categoria.fields.image4.fields.file.url}
                  pelicula={categoria.fields.movie4}
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name4}
                />
                <Card
                  image={categoria.fields.image5.fields.file.url}
                  pelicula={categoria.fields.movie5}
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name5}
                />
              </>
            );
          } else {
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
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name1}
                />
                <Card
                  image={categoria.fields.image2.fields.file.url}
                  pelicula={categoria.fields.movie2}
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name2}
                />
                <Card
                  image={categoria.fields.image3.fields.file.url}
                  pelicula={categoria.fields.movie3}
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name3}
                />
                <Card
                  image={categoria.fields.image4.fields.file.url}
                  pelicula={categoria.fields.movie4}
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name4}
                />
                <Card
                  image={categoria.fields.image5.fields.file.url}
                  pelicula={categoria.fields.movie5}
                  classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                  onClick={onClickHandler}
                  nameVariable={categoria.fields.name5}
                />
                <div className="cards_down">
                  <Card
                    image={categoria.fields.image6.fields.file.url}
                    pelicula={categoria.fields.movie6}
                    classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                    onClick={onClickHandler}
                    nameVariable={categoria.fields.name6}
                  />
                  <Card
                    image={categoria.fields.image7.fields.file.url}
                    pelicula={categoria.fields.movie7}
                    classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                    onClick={onClickHandler}
                    nameVariable={categoria.fields.name7}
                  />
                  <Card
                    image={categoria.fields.image8.fields.file.url}
                    pelicula={categoria.fields.movie8}
                    classname={i === currentCategoryIndex ? '' : 'card-hidden'}
                    onClick={onClickHandler}
                    nameVariable={categoria.fields.name8}
                  />
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default Game;
