import React, { useState } from 'react'
import styles from './Aliases.module.css'
import AliasList from '../../components/AliasList/AliasList'
import { FaHeart } from 'react-icons/fa'

const Aliases = () => {

  const [currentAlias, setCurrentAlias] = useState(0)
  const [showHeart, setShowHeart] = useState(false)
  const [showInstructions, setshowInstructions] = useState(true)
  
  const transition = () => {
    setShowHeart(false)
    setshowInstructions(false)
    setCurrentAlias(0)
    setTimeout(() => {  setShowHeart(true); setCurrentAlias(AliasList[Math.floor(Math.random() * AliasList.length)])}, 200)
  }

  return (
    <div className={`${styles.aliasesContainer}`}>
      <h1 className='pageTitle'>Aliases</h1>
      <div className={`${styles.eightBallContainer}`}>
        <div className={`${styles.eightBallOutter}`}
          onClick={() =>{
            transition()
          }}
        >
          <div className={`${styles.eightBallRing}`}>
            <div className={`${styles.eightBallInner}`}>
              <div className={`${styles.heartContainer}`}>
                {showInstructions && <h5 className={`${styles.aliasInstruct}`}>Click to see a nickname</h5>}
                {currentAlias !== 0 && <h5 className={`${styles.alias}`}>{`${currentAlias.name}`}</h5> }
                {showHeart && <FaHeart className={`${styles.heart}`} ></FaHeart>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
          onClick={() =>{
            transition()
          }}
        >Click</button>
    </div>
  )
}

export default Aliases