const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
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
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },

      {
        test: /\.svg$/,
        include: /\.*_sprite\.svg/,
        use: ["svg-sprite-loader", "svgo-loader"],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 3001,  // You can change the port if needed
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
};
