import React, { useState } from 'react'
import styles from './Aliases.module.css'
import AliasList from '../../components/AliasList/AliasList'
import { FaHeart } from 'react-icons/fa'
import 'animate.css';

const Aliases = () => {

  const [currentAlias, setCurrentAlias] = useState()
  const [remainingAliases, setremainingAliases] = useState([...AliasList])
  const [showHeart, setShowHeart] = useState(false)
  const [showInstructions, setshowInstructions] = useState(true)
  const [disabled, setDisabled] = useState()
  const [animate, setAnimate] = useState(false)
  const eightBallContainerClass = animate ? `${styles.eightBallContainer} + animate__animated + animate__shakeX` : `${styles.eightBallContainer}`


  const showAlias = () => {
    setAnimate(true)
    setCurrentAlias(0)
    setShowHeart(false)
    setshowInstructions(false)
    let newCurrentAlias = remainingAliases[Math.floor(Math.random() * remainingAliases.length)]
    setCurrentAlias(newCurrentAlias)
    let updatedAliases = remainingAliases.filter(remainingAlias => remainingAlias.id !== newCurrentAlias.id)
    setremainingAliases(updatedAliases)
    setTimeout(() => {
      setShowHeart(true)}, 400)
    setDisabled(remainingAliases.length === 1 ? true : false)
    console.log(remainingAliases)
    setTimeout(() => {
      setAnimate(false)}, 700)
  }

  

  
  return (
    <div className={`${styles.aliasesContainer}`}>
      <h1 className='pageTitle'>Aliases</h1>
      {remainingAliases.length === 0 ? <h3>That's all of them, for now.</h3>:<h3>{remainingAliases.length} remaing</h3>}
      <div className={eightBallContainerClass}>
      <button className={`${styles.eightBallButton}`}
          disabled={disabled}
          onClick={() =>{
            showAlias()
          }}
      ></button>
        <div className={`${styles.eightBallOutter}`}>
          <div className={`${styles.eightBallRing}`}>
            <div className={`${styles.eightBallInner}`}>
              <div className={`${styles.heartContainer}`}>
                {showInstructions && <h5 className={`${styles.aliasInstruct}`}>Click to see a nickname</h5>}
                {showHeart && <h5 className={`${styles.alias}`}>{`${currentAlias.name}`}</h5> }
                {showHeart && <FaHeart className={`${styles.heart}`} ></FaHeart>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        disabled={disabled}
        onClick={() =>{
          showAlias()
          }}
        >
         {!disabled ? "Click" : `That's it`} 
          </button>
    </div>
  )
}

export default Aliases