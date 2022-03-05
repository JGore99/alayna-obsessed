import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { GiDogHouse } from 'react-icons/gi'
import { FaBookOpen, FaVideo, FaHippo, FaDog, FaStar, FaHeart } from 'react-icons/fa'


const NavBar = () => {

  const [checked, setChecked] = useState(false)

  const handleCheckBox = (e) => {
    e.target.checked ? setChecked(true) : setChecked(false)
  }

  const closeHamburger = () => {
    setChecked(false)
  }

  return (
    <div 
      className={
      checked ? styles.navBarContainerChecked : styles.navBarContainer }
    >
      <div className={styles.navMessageContainer}>
        <h5 className={styles.navMessage}>We might be a little bit obsessed with our dog</h5>
      </div>
      <div className={styles.hamburgerContainer}>
        <input type='checkbox' 
        checked={checked}
          className={styles.toggler}
          onChange={(e) => {
            handleCheckBox(e)
          }}
        />
        <div className={styles.hamburger}>
          <div></div>
        </div>
      </div>
      <ul className={
        checked ? styles.navBarItemsChecked : styles.navBarItems }
        onClick={() => {
          closeHamburger()
        }}>
        <li>
          <Link to='/' className={checked ? styles.navItemChecked : styles.navItem }>
            <GiDogHouse className={styles.navIcon}/>
            <h3 className={styles.navText} >Home</h3>
            </Link>
        </li>
        <li>
          <Link to='/story' className={checked ? styles.navItemChecked : styles.navItem }>
            <FaBookOpen className={styles.navIcon}/>
            <h3 className={styles.navText} >Story</h3>
          </Link>
        </li>
        <li>
          <Link to='/video' className={checked ? styles.navItemChecked : styles.navItem }>
            <FaVideo className={styles.navIcon}/>
            <h3 className={styles.navText} >Video</h3>
          </Link>
        </li>
        <li>
          <Link to='/aliases' className={checked ? styles.navItemChecked : styles.navItem }>
            <FaHippo className={styles.navIcon}/>
            <h3 className={styles.navText} >Aliases</h3>
          </Link>
        </li>
        <li>
          <Link to='/buddies' className={checked ? styles.navItemChecked : styles.navItem }>
            <FaDog className={styles.navIcon}/>
            <h3 className={styles.navText} >Buddies!!</h3>
          </Link>
        </li>
        <li>
          <Link to='/favorites' className={checked ? styles.navItemChecked : styles.navItem }>
            <FaStar className={styles.navIcon}/>
            <h3 className={styles.navText} >Favorites</h3>
          </Link>
        </li>
        <li className={checked ? styles.alaynaCheckedContainer : styles.alaynaContainer }>
          <FaHeart className={styles.navHeart}/>
          <h2 className={checked ? styles.alaynaTitleChecked : styles.alaynaTitle }>Alayna</h2>
        </li>
      </ul>
    </div>
  )
}


export  default NavBar