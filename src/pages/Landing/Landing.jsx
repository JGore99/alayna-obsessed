import React from 'react'
import Slider from '../../components/Slider/Slider'
import SliderPhotos from '../../components/SliderPhotos/SliderPhotos'

const Landing = () => {
  return (
    <>
      <Slider slides={SliderPhotos}/>
    </>
  )
}

export default Landing