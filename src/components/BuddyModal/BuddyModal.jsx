import React from "react";
import styles from './BuddyModal.module.css'
import { GiDogHouse } from 'react-icons/gi'

function BuddyModal({ image, name, title, closeBuddyModal}) {
  return(
    <div className={`${styles.bdModalBg}`} onClick={(id) => {
      closeBuddyModal(false)
    }}>
      <img className={`${styles.bdModalImage}`} src={ image } alt="Silly Dog, being silly" />
      <h3 className={`${styles.bdModalName}`}>{ name }</h3>
      <h4 className={`${styles.bdModalTitle}`}>{ title} </h4>
        <GiDogHouse 
          className={`${styles.closeModalBtn}`} 
        />
    </div>
  )
}

export default BuddyModal