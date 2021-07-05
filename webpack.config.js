const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const publicFolder = 'public';
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  public: path.join(__dirname, publicFolder),
};

module.exports = {
  entry: `${PATHS.src}/index.js`,
  output: {
    path: `${PATHS.build}`,
    filename: 'index.bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [
      PATHS.src,
      'node_modules',
    ],
  },
  devServer: {
    port: 3000,
    contentBase: PATHS.public,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new ESLintWebpackPlugin({
      fix: true,
      files: path.join(__dirname, 'src'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.public}`,
          to: publicFolder,
        },
      ],
    }),
  ],
};
