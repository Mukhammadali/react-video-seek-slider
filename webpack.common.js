const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".less"],
  },
  module: {
    rules: [
      {
        test: /\.([jt])s(x)?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
          },
        ].filter(Boolean),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["build"], {
      verbose: false,
    }),
  ],
};
