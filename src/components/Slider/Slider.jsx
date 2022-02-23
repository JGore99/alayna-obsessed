import React, { useState } from 'react'
import styles from './Slider.module.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import SliderPhotos from '../SliderPhotos/SliderPhotos'


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  
  return (
    <div className={`${styles.sliderContainer}`}>
    <FaArrowAltCircleLeft className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide} />
    <FaArrowAltCircleRight className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide} />
      {SliderPhotos.map((slide, index) => {
        return (
          <div
            className={index === current ? `${styles.activeSlide}` : `${styles.slide}`}
            key={slide.id}  
          >
            {index === current && (
              <>
              <img className={`${styles.slideImage}`} src={ slide.image } alt="Silly Dog, being silly" />
              <h2>{slide.title}</h2>
              <button className='enlargeImageBtn'>Click to enlarge</button>
              </>
              )}
          </div>
        );
      })}
    </div>
  )
}

export default Slider

