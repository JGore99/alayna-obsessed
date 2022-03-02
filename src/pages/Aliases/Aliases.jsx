import React, { useState } from 'react'
import styles from './Aliases.module.css'
import AliasList from '../../components/AliasList/AliasList'
import { FaHeart } from 'react-icons/fa'

const Aliases = () => {

  const [currentAlias, setCurrentAlias] = useState(0)


  return (
    <div className={`${styles.aliasesContainer}`}>
      <h1 className='pageTitle'>Aliases</h1>
        <button
          onClick={() =>{
            setCurrentAlias(AliasList[Math.floor(Math.random() * AliasList.length)])
          }}
        >Click</button>
      <div className={`${styles.eightBallContainer}`}>
        <div className={`${styles.eightBallOutter}`}
          onClick={() =>{
            setCurrentAlias(AliasList[Math.floor(Math.random() * AliasList.length)])
          }}
        >
          <div className={`${styles.eightBallRing}`}>
            <div className={`${styles.eightBallInner}`}>
              <div className={`${styles.heartContainer}`}>
                {currentAlias !== 0 ? 
                <h5 className={`${styles.alias}`}>{`${currentAlias.name}`}</h5> : <h5>Click to see a nickname</h5>}
                {currentAlias !== 0 && <FaHeart className={`${styles.heart}`}></FaHeart>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aliases