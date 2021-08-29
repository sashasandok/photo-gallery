const user = require('../controllers/user')

const userRoutes = (router) => {
  router.get('/user', user.getUserList)
  router.post('/user', user.createUser)
  router.put('/user/:id', user.updateUser)
  router.delete('/user/:id', user.deleteUser)
}

module.exports = userRoutes
