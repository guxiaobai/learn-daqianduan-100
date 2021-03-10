const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common,{
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name]-[hash].css'
    })
  ],
  module:{
      rules: [
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }
      ]
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin()
    ]
  }
})
