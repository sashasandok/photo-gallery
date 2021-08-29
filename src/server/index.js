require('dotenv').config()
const express = require('express')
const db = require('./config/mongodb')
const routes = require('./routes/index')

const port = process.env.PORT || 4000

db.connection

const app = express()

app.listen(port, () => {
  console.log(`Server side is listening on port: ${port}`)  
})

const router = express.Router()
routes(app, router)
