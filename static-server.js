// main start point for production serving client builded static files
require('dotenv').config()
import express from 'express'
import favicon from 'express-favicon'
import path from 'path'
const port = process.env.WEB_APP_PORT || 3002

const app = express()
app.use(favicon(__dirname + '/build/assets/favicon.ico'))

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Client side is listening on port: ${port}`)
})