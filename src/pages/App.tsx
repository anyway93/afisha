import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/component/layout/layout.css';

import { Mainpage } from './Mainpage';
import { Sport } from './Genres/Sport';
import { Movies } from './Genres/Movies';
import { Theaters } from './Genres/Theaters';
import { Concerts } from './Genres/Concerts';
import { Others } from './Genres/Others';

import { Layout } from '../components/sections/Layout';
import { GenreBlock } from './GenreBlock';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Mainpage />} />
        <Route path="sport" element={<Sport />} />
        <Route path="movies" element={<Movies />} />
        <Route path="theaters" element={<Theaters />} />
        <Route path="concerts" element={<Concerts />} />
        <Route path="others" element={<Others />} />
        <Route path="/cards/:id" element={<GenreBlock />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
