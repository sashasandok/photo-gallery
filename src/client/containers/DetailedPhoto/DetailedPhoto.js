import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { fetchPhotoByIdInit, deletePhotoByIdInit } from '../../redux/actions/photo'
import styles from './DetailedPhoto.module.scss'

const DetailedPhoto = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { photoId } = useParams()

  const photo = useSelector(state => state.photo.item)

  useEffect(() => {
    dispatch(fetchPhotoByIdInit(photoId))
  }, [])

  const onDeletePhoto = () => {
    dispatch(deletePhotoByIdInit({ photoId, fileName: photo?.fileName, history }))
  }

  return (
    <div className={styles.DetailedPhotoWrapper}>
      <div className={styles.DetailedPhoto}>
        {photo?.src && <img className={styles.Image} src={`..${photo.src}`} alt="" />}
        <section className={styles.ImageInfo}>
          <div className={styles.ImageInfoItem}>
            <div>Size: </div> <span>{photo?.size}</span>
          </div>
          <div className={styles.ImageInfoItem}>
            <div>Extension: </div> <span>{photo?.extension}</span>
          </div>
          <div className={styles.ImageInfoItem}><div>Type: </div> <span>{photo?.type}</span></div>
          <div className={styles.ImageInfoItem}>
            <div>Description: </div> <span>{photo?.description}</span>
          </div>
          <div className={styles.ImageInfoItem}>
            <div>Creation Date: </div> <span>{photo?.createdAt}</span>
          </div>
          <div className={styles.ImageInfoItem}>
            <div>Author: </div> <span>{photo?.createdAt}</span>
          </div>
        </section>
      </div>
      <Button onClick={onDeletePhoto}>Delete</Button>
    </div>
  )
}

export default DetailedPhoto
