const path = require('path')
const fs = require('fs')
const Photo = require('../models/Photo')
const { saveImage, removeImage } = require('../helpers/image')

const uploadPhoto = async (req, res, next) => {
  const photoName = req?.body?.fileName?.replace(/\s/g, '_')
  const saved = saveImage(path.join(__dirname, '../../../', 'src/client/assets', '/photos'), photoName, req?.body?.file?.base64, req?.body?.type)
  if (saved) {
    const photo = {
      src: `/assets/photos/${photoName}`,
      description: req?.body?.description,
      fileName: req?.body?.fileName,
      extension: req?.body?.extension,
      size: req?.body?.size,
      type: req?.body?.type,
    }
  
    await Photo.create(photo)
    .then((doc) => res.status(200).json({ success: true, item: doc }))
    .catch((err) => res.status(400).json({ success: false, err}))
  }
}

const fetchPhotoList = async (req, res, next) => {
  await Photo.find({})
  .then((doc) => res.status(200).json({ success: true, item: doc }))
  .catch((err) => res.status(400).json({ success: false, err}))
}

const fetchPhotoById = async (req, res, next) => {
  const id = req.params.photoId
  await Photo.findById({ _id: id }).lean()
  .then((doc) => res.status(200).json({ success: true, item: doc }))
  .catch((err) => res.status(400).json({ success: false, err}))
}

const deletePhotoById = async (req, res, next) => {
  const id = req.params.photoId
  const photo = await Photo.findById({ _id: id })
  removeImage(path.join(__dirname, '../../../', 'src/client/assets', '/photos'), photo?.fileName)
  
  await Photo.findByIdAndDelete({ _id: id }).then((doc) => res.status(200).json({ success: true, item: doc }))
  .catch((err) => res.status(400).json({ success: false, err}))
}

module.exports = {
  uploadPhoto,
  fetchPhotoList,
  fetchPhotoById,
  deletePhotoById
}
