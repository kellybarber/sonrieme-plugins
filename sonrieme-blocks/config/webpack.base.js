const path                   = require('path')
const MiniCssExtractPlugin   = require('mini-css-extract-plugin')
const autoprefixer           = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry  : {
    editor : './src/editor.js',
    script : './src/script.js'
  },
  output : {
    path     : path.join(__dirname, '../dist'),
    filename : '[name].js'
  },
  module : {
    rules : [
      {
        test    : /\.js/,
        exclude : /node_modules/,
        use     : {
          loader  : 'babel-loader',
          options : {
            presets : [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  "pragma"     : "wp.element.createElement",
                  "pragmaFrag" : "wp.element.Fragment",
                }
              ]
            ]
          }
        }
      },
      {
        test : /\.s*css/,
        use : [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader  : 'postcss-loader',
            options : {
              plugins   : [ autoprefixer() ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  externals : {
    '@wordpress/blocks'       : [ 'wp', 'blocks' ],
    '@wordpress/i18n'         : [ 'wp', 'i18n' ],
    '@wordpress/editor'       : [ 'wp', 'editor' ],
    '@wordpress/block-editor' : [ 'wp', 'blockEditor' ],
    '@wordpress/element'      : [ 'wp', 'element' ],
    '@wordpress/components'   : [ 'wp', 'components' ]
  },
  plugins : [
    new CleanWebpackPlugin({
      root : path.resolve(__dirname, '..')
    }),
    new MiniCssExtractPlugin({
      moduleFilename : ({ name }) => name === 'script' ? 'style.css' : '[name].css'
     })
  ],
  resolve : {
    extensions : [ '*', '.js', '.css', '.scss' ]
  }
}