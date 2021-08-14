const user = require('../controllers/user')

const userRoutes = (router) => {
  router.get('/users', user.getUserList)
  router.post('/users', user.createUser)
  router.put('/users/:id', user.updateUser)
  router.delete('/users/:id', user.deleteUser)
}

module.exports = userRoutes
