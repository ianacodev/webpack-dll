const path = require('path');
const webpack = require('webpack');

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
    path: path.resolve(context, 'dist', 'vendor'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(context, 'dist', 'vendor', '[name]-manifest.json')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: [__dirname, 'node_modules']
  }
};
