import React from "react";
import Slider from "react-slick";

import '../styles/mainpage/mainpage.css';
import '../styles/component/card/card.css';
import { Card } from '../components/Card';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



function Mainpage() {
  return (
    <>
    <div className="search-block">
      <input type="text" placeholder='Что будем искать?'/>
      <div className="button-block">
        <button></button>
      </div>
    </div>
    <div className="date-block">
      date block
    </div>
    <div className="main-block">
      <div className="top-genre-block">
        <h2>Топ событий</h2>
        <div className="card-block">
          
            <Card title='Музыкальный Концерт' image='../images/cards/music-concert.jpg'/>
            <Card title='Фестиваль' image='../images/cards/music-festival.jpg'/>
            <Card title='Музыкальный Концерт' image='../images/cards/music-concert.jpg'/>
            <Card title='Музыкальный Концерт' image='../images/cards/music-concert.jpg'/>
            <Card title='Музыкальный Концерт' image='../images/cards/music-concert.jpg'/>
            <Card title='Музыкальный Концерт' image='../images/cards/music-concert.jpg'/>
          
        </div>
      </div>
    </div>
    
    </>
  );
}

export { Mainpage };
