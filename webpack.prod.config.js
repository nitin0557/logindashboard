const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "newbuild"),
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
};
