import React from 'react'
import styles from './BuddyModal.module.css'
import { GiDogHouse } from 'react-icons/gi'

function BuddyModal({ image, name, title, closeBuddyModal, showBuddies }) {

  return(
    <div className={`${styles.bdModalBg}`} onClick={(id) => {
      closeBuddyModal(false)
      showBuddies(true)
    }}>
      <div className={`${styles.bdModalCard}`}>
        <img className={`${styles.bdModalImage}`} src={ image } alt="Silly Dog, being silly" />
        <div className={`${styles.bdModalDetails}`}>
          <h3 className={`${styles.bdModalName}`}>{ name }</h3>
          <div className={`${styles.closeModalContainer}`}>
            <GiDogHouse 
              className={`${styles.closeModalBtn}`} 
            />
            <h4>Click anywhere to go back</h4>
          </div>
          <h4 className={`${styles.bdModalTitle}`}>{ title} </h4>
        </div>
      </div>
    </div>
  )
}

export default BuddyModal