import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchPhotoInit } from '../../redux/actions/photo'
import { useSelector, useDispatch } from 'react-redux'
import NoPhotos from '../../components/NoPhotos/NoPhotos'
import styles from './Gallery.module.scss'

const Gallery = () => {
  const dispatch = useDispatch()

  const photos = useSelector(state => state.photo.items)

  useEffect(() => {
    dispatch(fetchPhotoInit())
  }, [])

  return (
    <div className={styles.GalleryWrapper}>
      <h2>Gallery</h2>
      <section className={styles.ImageList}>
        {photos?.length ? photos.map(photo => {
          return (
            <Link key={photo._id} to={`photo/${photo._id}`}><img className={styles.Image} src={`../..${photo.src}`} alt="" /></Link>
          )
        }) : <NoPhotos />}
      </section>
      <img src="https://ucarecdn.com/c366b9b6-6c34-4033-a4c3-17c09609aea5/unnamed.jpg" alt="iii" />
    </div>
  )
}

export default Gallery
