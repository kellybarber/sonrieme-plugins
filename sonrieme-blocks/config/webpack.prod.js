const base                    = require('./webpack.base')
const merge                   = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin     = require('terser-webpack-plugin')

module.exports = merge(base, {
  mode         : 'production',
  devtool      : 'source-map',
  optimization : {
    minimizer : [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  }
})