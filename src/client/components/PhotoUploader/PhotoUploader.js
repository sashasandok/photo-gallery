import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'antd'
import { Widget } from "@uploadcare/react-widget"
import { useHistory } from 'react-router-dom'
import { createPhotoInit } from '../../redux/actions/photo'
import styles from './PhotoUploader.module.scss'

const getBase64 = file => {
  return new Promise(resolve => {
    let baseURL = ""
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      baseURL = reader.result
      resolve(baseURL)
    }
  })
}

const PhotoUploader = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [src, setSrc] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')
  const [type, setType] = useState('')
  const [size, setSize] = useState('')
  const [extension, setExtension] = useState('')

  const isUploaded = useSelector(state => state.photo.uploaded)

  useEffect(() => {
    if (isUploaded) {
      setTimeout(() => {
        history.push('/gallery')
      }, 500)
    }
  }, [isUploaded])

  const onFileChange = event => {
    const arr = event.target.files[0].type.split('')
    const index = arr.findIndex(i => i === '/')
    const ext = arr.slice(index + 1, arr.length).join('')
    setFile(event.target.files[0])
    setFileName(event.target.files[0].name)
    setType(event.target.files[0].type)
    setSrc(URL.createObjectURL(event.target.files[0]))
    setSize(event.target.files[0].size)
    setExtension(ext)
  }

  const onFileUpload = () => {
    getBase64(file)
      .then(result => {
        const formData = new FormData()
        file["base64"] = result
        formData.append('file', file)
        formData.append('fileName', fileName)

        const fileToSave = {
          file: formData.getAll('file')[0],
          fileName,
          type,
          description,
          size,
          extension,
        }
        dispatch(createPhotoInit(fileToSave, history))
      })
      .catch(err => {
        console.log(err)
      })
    setFile(null)
  }

  const onDescriptionChange = (evt) => {
    const { target: { value } } = evt
    setDescription(value)
  }

  const onFileDelete = () => {
    setFile(null)
    setDescription('')
  }
  
  const fileData = () => {
    if (file) {
      return (
        <div className={styles.InfoWrapper}>
          <div className={styles.Info}>
            <h3>File Details:</h3>
            <p><b>File Name:</b> {file.name}</p>       
            <p><b>File Type:</b> {file.type}</p>     
            <p>
              <b>Last Modified:</b>{" "}
              {file?.lastModifiedDate?.toDateString()}
            </p>
            <p>
              <b>Descripiton: </b>
              {description}
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <br />
          <h4>Choose photo before pressing the Upload button</h4>
        </div>
      )
    }
  }

  const secretKey = process.env.UPLOAD_SECRET_KEY

  return (
    <div className={styles.PhotoUploaderWrapper}>
      <h2>Photo Uploader</h2>
      <hr />
      <div className={styles.Controlls}>
        <div className={styles.InputsWrapper}>
          {file ? (
            <img className={styles.Image} src={src} alt='alt_image' />
          ) : (<Input
            className={styles.Input}
            type="file"
            onChange={onFileChange}
          />)}
          {file && (
            <div>
              <b>Description: </b>
              <Input.TextArea
                className={styles.TextArea}
                type="text"
                value={description}
                onChange={onDescriptionChange}
              />
            </div>
          )}
        </div>
        <Widget publicKey={secretKey} />
        <div className={styles.ButtonsWrapper}>
          <Button
            className={styles.Button}
            type="primary"
            onClick={onFileUpload}
            disabled={!file}
          >
            Upload!
          </Button>
          {file && (
            <Button
              className={styles.Button}
              type="primary"
              danger
              onClick={onFileDelete}
            >
              delete picture!
            </Button>
          )}
        </div>
      </div>
      <hr />
      <div className={styles.FileDataWrapper}>
        {fileData()}
      </div>
    </div>
  )
}

export default PhotoUploader