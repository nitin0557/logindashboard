const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
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
};
