const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry:"./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : 'js/[name]-[hash].js'
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
