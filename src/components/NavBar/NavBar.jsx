import React from 'react';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navMessageContainer}>
        <h5 className={styles.navMessage}>We might be a little bit obsessed with our dog</h5>
      </div>
      <ul className={styles.navBarItems}>
        <li>
          Story
        </li>
        <li>
          Video
        </li>
        <li>
          Aliases
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