import React from 'react'
import { CardSlider } from '../Cards/Card-s';
import Slider from 'react-slick';
import '../../styles/component/slider/slick-theme.css'
import '../../styles/component/slider/slick.css'
import '../../styles/component/card-slider/card-slider.css'

import { cardTop } from '../../assets/cards';

interface SliderblockProps {
  searchValue: string;
}

export const Sliderblock: React.FC<SliderblockProps> = ({ searchValue }) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  return (
    <div className="top-genre-block">
      <h2>Топ событий</h2>
      <div className="card-block">
        <Slider {...settings}>
          {
            cardTop.filter(obj => {
              if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true
                
              }
              
              return false

              }).map(obj => (
              <>
              <CardSlider linkTo='#' title={obj.title} image={obj.image}/>
              </>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}
