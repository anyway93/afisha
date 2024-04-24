import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/component/card-block/card-block.css'

interface CardProps {
   title: string;
   image: string;
   id: string;
}

 const Card = ({title, image, id}: CardProps) => {
   return (
      <>
         <Link to={`/cards/${id}`} className='card'>
            <div className="card-auxblock1">
               <img src={image} alt="" />
            </div>
            <div className="card-auxblock2">
               <span>{title}</span>
            </div>
         </Link>
      </>
      
   )
}

export {Card}