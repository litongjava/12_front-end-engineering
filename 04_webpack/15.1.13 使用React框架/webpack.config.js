const path = require("path");
// 分离CSS文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩CSS文件
const optimizeCss = require('optimize-css-assets-webpack-plugin');
// 分离HTML文件
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  // entry:"./src/index.js",
  entry: {
    index: "./src/index.js",
    login: "./src/login/login.js"
  },
  output: {
    // filename:"bundle.js",
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      // 配置很多你需要的处理方案：css、es6、vue、react
      // {
      //     // test:gulp中的scr：找到对应的匹配文件
      //     test:/\.css$/,
      //     use:["style-loader","css-loader"]
      // }
      {
        // test:gulp中的scr：找到对应的匹配文件
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      // ES6转码成ES5规则
      {
        //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        test: /\.(js|jsx)$/,
        //loader的名称（必须）
        use: ['babel-loader'],
        //屏蔽不需要处理的文件（文件夹）（可选）
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    // 分离
    new MiniCssExtractPlugin({
      filename: "main.css",
      // chunkFilename:'[id].css'
    }),
    // 压缩
    new optimizeCss(),
    // 分离HTML
    new HTMLPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    // 服务器打开目录
    contentBase: path.join(__dirname, 'dist'),
    // 压缩
    compress: true,
    port: 9090,
    hot: true,
    open: true // 自动打开浏览器
  },
  resolve: {
    extensions: ['.js', '.json', ".css"]
  }
}