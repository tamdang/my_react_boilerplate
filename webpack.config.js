const webpack = require('webpack')
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    ]
  },
  mode: 'development',
  devServer: {
    publicPath: '/dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
