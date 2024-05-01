import React from 'react'
import { Search } from '../../components/sections/Search'

import '../../styles/genrepage/genrepage.css'
import { cardTheater } from '../../assets/cards';
import { Card } from '../../components/Cards/Card';

export const Theaters = () => {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <div className="head-block">
        <div className="head-block__sort">Сортировать по: </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="genre-block">
        <h2>Театры</h2>
        <div className="card-block">
          {
            cardTheater.filter(obj => {
              if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true
              }

              return false
            }).map(obj => (
              <Card id='' title={obj.title} image={obj.image}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

