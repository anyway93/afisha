import React from 'react'
import { Search } from '../../components/sections/Search'

import '../../styles/genrepage/genrepage.css'
import { cardMovie } from '../../assets/cards';
import { Card } from '../../components/Cards/Card';

export const Movies = () => {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <div className="head-block">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="genre-block">
        <h2>Кино</h2>
        <div className="card-block">
          {
            cardMovie.filter(obj => {
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

