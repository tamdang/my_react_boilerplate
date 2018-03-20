const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
}