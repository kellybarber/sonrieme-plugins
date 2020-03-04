const merge                   = require('webpack-merge')
const base                    = require('./webpack.base')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin     = require('terser-webpack-plugin')

module.exports = merge(base, {
  mode         : 'development',
  devtool      : 'cheap-module-source-map',
  optimization : {
    minimizer : [
      new TerserWebpackPlugin({
        sourceMap : true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions : {
          map : {
            inline     : false,
            annotation : true
          }
        }
      })
    ]
  }
})