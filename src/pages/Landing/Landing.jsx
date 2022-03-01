import React from 'react'
import styles from './Landing.module.css'
import Slider from '../../components/Slider/Slider'
import SliderPhotos from '../../components/SliderPhotos/SliderPhotos'

const Landing = () => {
  return (
      <Slider slides={SliderPhotos}/>
  )
}

export default Landing