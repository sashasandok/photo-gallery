const photo = require('../controllers/photo')

const photoRoutes = (router) => {
  router.post('/photo', photo.uploadPhoto)
  router.get('/photo', photo.fetchPhotoList)
  router.get('/photo/:photoId', photo.fetchPhotoById)
  router.delete('/photo/:photoId', photo.deletePhotoById)
}

module.exports = photoRoutes