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
                  "pragma"     : "React.createElement",
                  "pragmaFrag" : "React.Fragment",
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