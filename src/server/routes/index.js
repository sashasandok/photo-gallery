const bodyParser = require('body-parser') 
const path = require('path')
const cors = require('cors') 
const userRoutes = require('./user')
const photoRoutes = require('./photo')

const routes = (app, router) => {
  userRoutes(router)
  photoRoutes(router)

  // will redirect all the non-api routes to react frontend
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../../client','build','index.html'));
  });

  app.use(bodyParser.json({ limit: "50mb" }))
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))
  app.use(cors())
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Methods',
      'GET,HEAD,OPTIONS,POST,PUT,DELETE'
    )
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    next()
  })

  app.use('/api', router)
}

module.exports = routes