import React from 'react';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <ul className={styles.navBarItems}>
        <li>
          Story
        </li>
        <li>
          Video
        </li>
        <li>
          Buddies
        </li>
        <li>
          Favorites
        </li>
      </ul>
    </div>
  )
}


export  default NavBar