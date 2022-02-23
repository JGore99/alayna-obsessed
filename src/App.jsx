import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import SliderPhotos from './components/SliderPhotos/SliderPhotos';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <p>
          Alayna
        </p>
      </header>
      <Slider slides={SliderPhotos}/>
    </div>
    </>
  );
}

export default App;
