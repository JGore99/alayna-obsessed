import React from 'react'
import styles from './Buddies.module.css'
import BuddyPhotos from '../../components/BuddyPhotos/BuddyPhotos'
import BuddyCard from '../../components/BuddyCar/BuddyCard'

const Buddies = () => {
  return (
    <div className={`${styles.buddiesContainer}`}>
      <h1 className='pageTitle'>Buddies!!!</h1>
      <div className={`${styles.buddiesCardContainer}`}>
      {BuddyPhotos.map(buddy => 
        <BuddyCard
          key={buddy.id}
          buddy={buddy}
          />
        )}
      </div>
    </div>
  )
}

export default Buddies