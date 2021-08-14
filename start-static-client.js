
require('dotenv').config()

require('@babel/register')({
  presets: ['@babel/preset-env'],
})

module.exports = require('./static-server')