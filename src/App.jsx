import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Landing from './pages/Landing/Landing'
import Story from './pages/Story/Story'
import Video from './pages/Video/Video'
import Aliases from './pages/Aliases/Aliases'
import Buddies from './pages/Buddies/Buddies'
import Favorites from './pages/Favorites/Favorites'

function App() {

  return (
    <main>
      <NavBar />
      <Header />
      <Routes>
        <Route path='/' element={<Landing /> }/>
        <Route path='/story' element={<Story />}/>
        <Route path='/video' element={<Video />}/>
        <Route path='/aliases' element={<Aliases />}/>
        <Route path='/buddies' element={<Buddies />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </main>
  );
}

export default App;
