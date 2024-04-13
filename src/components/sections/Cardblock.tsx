import React from 'react'
import { Card } from '../Cards/Card'

import { cardSport } from '../../assets/cards';


interface CardblockProps {
  searchValue: string;
}

export const Cardblock: React.FC<CardblockProps> = ({ searchValue }) => {
  return (
  <>
    <div className="genre-block">
      <h2>Спорт</h2>
      <div className="card-block">
        {
          cardSport.filter(obj => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
              return true
            }

            return false
          }).slice(0, 6).map(obj => (
            <Card title={obj.title} image={obj.image}/>
          ))
        }
      </div>
    </div>
    <div className="genre-block">
      <h2>Кино</h2>
      <div className="card-block">
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/> 
      </div>
    </div>
    <div className="genre-block">
      <h2>Театры</h2>
      <div className="card-block">
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/> 
      </div>
    </div>
    <div className="genre-block">
      <h2>Концерты</h2>
      <div className="card-block">
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/> 
      </div>
    </div>
    <div className="genre-block">
      <h2>Разное</h2>
      <div className="card-block">
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/>
        <Card title='' image=''/> 
      </div>
    </div>
  </>
  )
}
