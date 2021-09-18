require('dotenv').config()
const mongoose = require('mongoose')

const mongoPort = process.env.MONGO_PORT
const mongoDbName = process.env.MONGO_DB_NAME

const connection = mongoose.connect(`mongodb://localhost:${mongoPort}/${mongoDbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log(`mongoDB connected on port: ${mongoPort}`))
  .catch((err) => console.log(err))

module.exports = connection