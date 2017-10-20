//need to tell it the entry point and the output (app.js in src, and the one big js file in public next to index.html)
//__dirname gives the absolute path to the file
//path is a node module that helps take a bunch of data and concatenate it into actual cross-platform/os compatible file paths while also eliminating redundancies (like if you concatenated '../' whatever the previous path piece was would automatically be removed)
const path = require('path');



module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    }, {
      test:/\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true //set this up so each time the server sends 404 back, it fallsback to index.html which is where the react-router will actually be rendering and serving up content
  }
};
