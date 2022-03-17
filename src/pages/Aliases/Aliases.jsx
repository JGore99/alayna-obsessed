import React, { useState } from 'react'
import styles from './Aliases.module.css'
import AliasList from '../../components/AliasList/AliasList'
import { FaHeart } from 'react-icons/fa'

const Aliases = () => {

  const [currentAlias, setCurrentAlias] = useState()
  const [remainingAliases, setremainingAliases] = useState([...AliasList])
  const [showHeart, setShowHeart] = useState(false)
  const [showInstructions, setshowInstructions] = useState(true)
  const [disabled, setDisabled] = useState()
  
  const showAlias = () => {
    setCurrentAlias(0)
    setShowHeart(false)
    setshowInstructions(false)
    let newCurrentAlias = remainingAliases[Math.floor(Math.random() * remainingAliases.length)]
    setCurrentAlias(newCurrentAlias)
    let updatedAliases = remainingAliases.filter(remainingAlias => remainingAlias.id !== newCurrentAlias.id)
    setremainingAliases(updatedAliases)
    console.log("remainingAliases", remainingAliases)
    console.log("length", remainingAliases.length)
    setTimeout(() => {
      setShowHeart(true)}, 400)
    setDisabled(remainingAliases.length === 1 ? true : false)
  }

  return (
    <div className={`${styles.aliasesContainer}`}>
      <h1 className='pageTitle'>Aliases</h1>
      <h3>{remainingAliases.length} remaing</h3>
      {disabled && <h3>That's all of them, for now.</h3>}
      <div className={`${styles.eightBallContainer}`}>
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
        >Click</button>
    </div>
  )
}

export default Aliases