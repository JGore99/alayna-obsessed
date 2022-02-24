import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import SliderPhotos from './components/SliderPhotos/SliderPhotos';
import Modal from './components/Modal/Modal';

function App() {

  return (
    <>
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <NavBar />
          <h2 className="alayna-title">
            Alayna
          </h2>
        </header>
        <Slider slides={SliderPhotos} modal={Modal}/>
      </div>
    </div>
    </>
  );
}

export default App;
