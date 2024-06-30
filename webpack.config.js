const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // エントリーポイントのファイル
  output: {
    publicPath: "/",
    filename: "bundle.js", // 出力ファイル名
    path: path.resolve(__dirname, "dist"), // 出力ディレクトリ
    chunkFilename: "src/js/[name].bundle.js", // チャンクファイル名
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: {
    webtalekit: "commonjs webtalekit",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080,
    headers: {
      "Feature-Policy": "autoplay 'self'",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // (オプション) 使用するHTMLテンプレートファイル
      filename: "index.html", // 出力されるHTMLファイル名
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          move: [
            {
              source: path.resolve(__dirname, "node_modules/webtalekit/src/"),
              destination: path.resolve(__dirname, "./src/runtime/"),
            },
          ],
        },
        onEnd: {
          copy: [
            {
              source: path.resolve(__dirname, "./src/resource"),
              destination: path.resolve(__dirname, "dist/src/resource"),
            },
            {
              source: path.resolve(__dirname, "./src/screen"),
              destination: path.resolve(__dirname, "dist/src/screen"),
            },
          ],
          move: [
            {
              source: path.resolve(__dirname, "./src/runtime"),
              destination: path.resolve(
                __dirname,
                "node_modules/webtalekit/src/"
              ),
            },
          ],
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
