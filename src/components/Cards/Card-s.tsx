
import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/component/card-slider/card-slider.css'

interface CardProps {
   title: string;
   image: string;
   linkTo: string;
}

 const CardSlider = ({title, image, linkTo}: CardProps) => {
   return (
      <>
         <Link to='#' className='slider-card-link'>
            <div>
               <div className="slider-card">
                  <div className="slider-card-auxblock1">
                     <img src={image} alt="" />
                  </div>
                  <div className="slider-card-auxblock2">
                     <span>{title}</span>
                  </div>
               </div>
            </div>
         </Link>
      </>
      
   )
}

export {CardSlider}