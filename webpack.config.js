var path = require('path');

module.exports = {
  entry: {
    app:'./index.js',
    vendor: './vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};