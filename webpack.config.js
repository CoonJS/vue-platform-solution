const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname , 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|woff|woff2|ttf)/,
        loader: 'file-loader'
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new HtmlWebpackPlugin({
      title: 'Salestat',
      template: path.resolve(__dirname, 'index.html'),
      inject: 'body'
    }),
  ],

  devServer: {
    host: '0.0.0.0',
    port: '8080',
    proxy: {
      '*': {
        target: 'http://77.244.213.135:8080'
      }
    }
  }
};