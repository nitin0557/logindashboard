const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpeg|png|gif|svg)$/i,
        use: [
          "file-loader?name=[name].[ext]&publicPath=./&outputPath=./images/",
          "file-loader",
        ],
      },
      {
        test: /\.svg$/i,
        include: /\.*_sprite\.svg/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              publicPath: "./src",
            },
          },
          {
            loader: "svgo-loader",
            options: {
              plugins: [{ cleanupIDs: false }],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,  // You can change the port if needed
    historyApiFallback: true,  // For handling React Router paths
  },

  // Plugins for additional functionality
  plugins: [
    new CleanWebpackPlugin(),  // Clean dist folder before each build
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Template for generating HTML
      inject: true,
    }),
  ],

  // Optional: Source maps for better debugging
  devtool: 'source-map',
};
