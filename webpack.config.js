var path = require('path')
var config = {
  entry: ['./src/index.js'],
  output: {
    // publicPath: '/dist/',
    path: __dirname,
    filtername: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}

module.exports = config