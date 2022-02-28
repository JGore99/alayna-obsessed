import React, { useState } from 'react'
import styles from './Slider.module.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaHeart } from 'react-icons/fa'
import SliderPhotos from '../SliderPhotos/SliderPhotos'
import Modal from '../Modal/Modal'


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const [showArrows, setShowArrows] = useState(true)

  const [openModal, setOpenModal] = useState(false)

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  
  return (
    <div className={`${styles.sliderContainer}`}>
      {SliderPhotos.map((slide, index) => {
        return (
          <div
            className={index === current ? `${styles.activeSlide}` : `${styles.slide}`}
            key={slide.id}  
          >
            {index === current && (
              <>
              <img className={`${styles.slideImage}`} src={ slide.image } alt="Silly Dog, being silly" />
              <h3 className={`${styles.slideTitle}`}>{slide.title}</h3>
              <div className={`${styles.slideControls}`}>
                <dvi className={`${styles.heartContainer}`}
                onClick={() => {
                  setOpenModal(true)
                  setShowArrows(false)
                }}
                >
                  <FaHeart 
                    className={`${styles.heart}`}
                  />
                  <h5 className={`${styles.enlarge}`}>ZOOM <br/>IN</h5>
                </dvi>  
                {showArrows && <FaArrowAltCircleLeft className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide} />}
                {showArrows && <FaArrowAltCircleRight className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide} />} 
              </div>
              {openModal && <Modal image={slide.image} closeModal={setOpenModal} hideArrows={setShowArrows}/>}
              </>
              )}
          </div>
        );
      })}
    {/* {showArrows && <FaArrowAltCircleLeft className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide} />}
    {showArrows && <FaArrowAltCircleRight className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide} />} */}
    </div>
  )
}

export default Slider

