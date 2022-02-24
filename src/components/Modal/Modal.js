import React from 'react'
import styles from './Modal.module.css'

function Modial({ image, closeModal, hideArrows}) {
  return (
    <div className={`${styles.modalBg}`}>
      <div className={`${styles.modalContainer}`}>
        <div className={`${styles.modalBody}`}>
        <img className={`${styles.modalImage}`} src={ image } alt="Silly Dog, being silly" />
        </div>
        <button 
          className={`${styles.closeModalBtn}`} 
          onClick={() => {
            closeModal(false)
            hideArrows(true)
          }}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Modial