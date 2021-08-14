require('dotenv').config()
const express = require('express')
const path = require('path')
const db = require('./config/mongodb')
const routes = require('./routes/index')
const favicon = require('express-favicon')

const port = process.env.PORT || 4000

db.connection

const app = express()

// for static files
// app.use(favicon(__dirname + '../../../build/assets/favicon.ico'))
// app.use(express.static(path.join(__dirname, '../../build')))
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../../build', 'index.html'))
// })

app.listen(port, () => {
  console.log(`Server side is listening on port: ${port}`)  
})

const router = express.Router()
routes(app, router)
