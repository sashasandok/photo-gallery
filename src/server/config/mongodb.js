require('dotenv').config()
const mongoose = require('mongoose')

const mongo_port = process.env.MONGO_PORT
const mongo_db_name = process.env.MONGO_DB_NAME

const connection = mongoose.connect(`mongodb://localhost:${mongo_port}/${mongo_db_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log(`mongoDB connected on port: ${mongo_port}`))
  .catch((err) => console.log(err))

module.exports = connection