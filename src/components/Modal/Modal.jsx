import React from 'react'
import styles from './Modal.module.css'
import { GiDogHouse } from 'react-icons/gi'

function Modial({ image, closeModal, hideArrows}) {
  return (
    <div className={`${styles.modalBg}`}>
      <div className={`${styles.modalContainer}`}
        onClick={() => {
          closeModal(false)
          hideArrows(true)
        }}
      >
        <img className={`${styles.modalImage}`} src={ image } alt="Silly Dog, being silly" />
        <GiDogHouse 
          className={`${styles.closeModalBtn}`} 
        />
      </div>
    </div>
  )
}

export default Modial