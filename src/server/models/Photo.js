const mongoose = require('mongoose')
const { Schema } = mongoose

const PhotoSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  fileName: { type: String, required: true },
  src: { type: String, required: true },
  description: { type: String, required: true },
  extension: { type: String, required: true },
  size: { type: String, required: true },
  type: { type: String, required: true },
})

const Photo = mongoose.model("Photo", PhotoSchema)

module.exports = Photo
