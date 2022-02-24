import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { GiDogHouse } from 'react-icons/gi'
import { FaBookOpen, FaVideo, FaHippo, FaDog,FaStar } from 'react-icons/fa'


const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navMessageContainer}>
        <h5 className={styles.navMessage}>We might be a little bit obsessed with our dog</h5>
      </div>
      <ul className={styles.navBarItems}>
        <li className={styles.navItem}>
          <Link to='/'><GiDogHouse className={styles.navIcon}/>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/story'><FaBookOpen className={styles.navIcon}/> Story</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/video'><FaVideo className={styles.navIcon}/>Video</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/aliases'><FaHippo className={styles.navIcon}/>Aliases</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/buddies'><FaDog className={styles.navIcon}/>Buddies!!</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/favorites'><FaStar className={styles.navIcon}/>Favorites</Link>
        </li>
      </ul>
    </div>
  )
}


export  default NavBar