import React from 'react'
import styles from './NoPhotos.module.scss'

const NoPhotos = () => {
  return (
    <div className={styles.NoPhotosWrapper}>
      <h2 className={styles.Content}>You have no photos at this time</h2>
    </div>
  )
}

export default NoPhotos
