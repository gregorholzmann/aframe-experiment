const path = require('path');
const TARGET = process.env.npm_lifecycle_event;

console.log(TARGET);

module.exports = {
  entry: {
    app: ['babel-polyfill','./index.js'],
    vendor: './vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(mtl|obj|jpg|png)$/,
        loader: 'file-loader?name=./assets/models/[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'file-loader?name=./assets/data/[name].[ext]'
      }
    ]
  }
};
