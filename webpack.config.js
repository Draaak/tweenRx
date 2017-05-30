var webpack = require('webpack');
var path = require("path");  

module.exports = {
  context: __dirname + '/src',  
  entry: {
    'tweenRx': './tween.ts',
    'tweenRx.min': './tween.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),    
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'rxjs': 'rxjs'
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ],
    extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.min.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],  
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015!ts-loader'
      }
    ]
  }  
}