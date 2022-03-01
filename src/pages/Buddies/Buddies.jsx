import React, { useState } from 'react'
import styles from './Buddies.module.css'
import BuddyPhotos from '../../components/BuddyPhotos/BuddyPhotos'
import BuddyCard from '../../components/BuddyCard/BuddyCard'
import BuddyModal from '../../components/BuddyModal/BuddyModal'

const Buddies = () => {

  const [openBuddyModal, setOpenBuddyModal] = useState(false)
  const [buddyId, setBuddyId] = useState()

  return (
    <div className={`${styles.buddiesContainer}`}>
      <h1 className='pageTitle'>Buddies!!!</h1>
      <div className={`${styles.buddiesCardContainer}`}>
      {BuddyPhotos.map((buddy, index) => {
        return (
          <>
          <BuddyCard 
            key={buddy.id}
            buddy={buddy}
            openBuddyModal={setOpenBuddyModal}
            setBuddyId={setBuddyId}
            />
            {console.log(buddyId)}
          {openBuddyModal && buddyId === buddy.id && <BuddyModal image={buddy.image} name={buddy.name} title={buddy.title} closeBuddyModal={setOpenBuddyModal} />}
          </>
        )
      })}
      </div>
    </div>
  )
}

export default Buddies