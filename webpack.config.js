var webpack = require('webpack');
var path = require('path');
var definePlugin = new webpack.DefinePlugin({
  "process.env.NODE_ENV": "'production'"
});

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: 'node_modules',
        loader: 'babel',
        query: {
          presets: ['es2015','stage-0', 'react'],
          plugins: ['transform-es2015-destructuring']
        }
      }
    ],
  },
  plugins: [definePlugin],
  entry: {
    "/dist/index": './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
