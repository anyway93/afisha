import React from 'react'
import { Search } from '../../components/sections/Search'

import '../../styles/genrepage/genrepage.css'
import { cardOther } from '../../assets/cards';
import { Card } from '../../components/Cards/Card';

export const Others = () => {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <div className="head-block">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="genre-block">
        <h2>Разное</h2>
        <div className="card-block">
          {
            cardOther.filter(obj => {
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

