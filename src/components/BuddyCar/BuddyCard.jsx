import React from 'react'
import styles from './BuddyCard.module.css'

const BuddyCard = ({ buddy }) => {
  return (
    <div className={`${styles.buddyCard}`}>
      <img className={`${styles.buddyImage}`} src={ buddy.image } alt="Buddies!!" />
      <h3 className={`${styles.buddyName}`}>{buddy.name}</h3>
      <h4 className={`${styles.buddyTitle}`}>{buddy.title}</h4>
    </div>
  )
}

export default BuddyCard;