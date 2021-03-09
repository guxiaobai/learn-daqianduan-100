const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry:"./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : 'assets/[name]-[hash].js',
    clean: true
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : 'assets/[name]-[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
}
