var path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
