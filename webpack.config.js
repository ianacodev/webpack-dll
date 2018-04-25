const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  cache: false,
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['./app/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        test: /\.js*/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: [path.join(__dirname, 'src')]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new ProgressBarWebpackPlugin(),
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(path.resolve(
        __dirname,
        'dist',
        'vendor',
        'vendor-manifest.json'
      ))
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: 3000,
    inline: true
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', __dirname]
  }
};
