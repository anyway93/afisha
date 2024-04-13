import React from 'react'
import { Search } from '../../components/sections/Search'

import '../../styles/genrepage/genrepage.css'
import { cardSport } from '../../assets/cards';
import { Card } from '../../components/Cards/Card';

export const Sport = () => {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <div className="head-block">
        <div className="head-block__sort">Сортировать по: </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="genre-block">
        <h2>Спорт</h2>
        <div className="card-block">
          {
            cardSport.filter(obj => {
              if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true
              }

              return false
            }).map(obj => (
              <Card title={obj.title} image={obj.image}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

