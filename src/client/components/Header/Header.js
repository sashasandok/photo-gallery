import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.HeaderWrapper}>
      <Link className={styles.Link} to="/">Home</Link>
      <Link className={styles.Link} to="/gallery">Gallery</Link>
      <Link className={styles.Link} to="/photo_uploader">PhotoUploader</Link>
    </header>
  )
}

export default Header