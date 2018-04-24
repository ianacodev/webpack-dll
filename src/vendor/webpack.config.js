const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const context = path.join(__dirname, '../../');

module.exports = {
  context: context,
  entry: {
    vendor: [
      'react',
      'redux',
      'jquery',
      'd3',
      'highcharts',
      'bootstrap/dist/js/bootstrap.bundle.min.js',
      'bootstrap/dist/css/bootstrap.min.css',
      'angular'
    ]
  },
  output: {
    path: path.join(context, 'dist'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        exclude: ['node_modules']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(context, 'index.html')
    }),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(context, 'dist', '[name].json')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: [__dirname, 'node_modules']
  }
};
