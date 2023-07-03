// const path = require("path");
// // 分离CSS文件
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// // 压缩CSS文件
// const optimizeCss = require('optimize-css-assets-webpack-plugin');
// // 分离HTML文件
// const HTMLPlugin = require('html-webpack-plugin')
// // 加载vue文件
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
// // webpack
// const webpack = require('webpack')

// module.exports = {
//   // 入口
//   // entry: "./src/index.js",
//   entry: {
//     index: "./src/index.js",
//     login: "./src/login/login.js"
//   },
//   output: {
//     // filename:"bundle.js",
//     filename: "[name].js",
//     path: path.resolve(__dirname, "./dist")
//   },
//   mode: "development",
//   module: {
//     rules: [
//       // 配置很多你需要的处理方案：css、es6、vue、react
//       // {
//       //     // test:gulp中的scr：找到对应的匹配文件
//       //     test:/\.css$/,
//       //     use:["style-loader","css-loader"]
//       // }
//       {
//         // test:gulp中的scr：找到对应的匹配文件
//         test: /\.css$/,
//         use: [{
//             loader: MiniCssExtractPlugin.loader
//           },
//           "css-loader"
//         ]
//       },
//       // ES6转码成ES5规则
//       {
//         test: /\.js$/,
//         use: ['babel-loader'],
//         // 只对项目根目录下的 src 目录中的文件采用 babel-loader
//         include: path.resolve(__dirname, 'src')
//       },
//       {
//         test: /\.vue$/,
//         use: {
//           loader: 'vue-loader'
//         }
//       },
//       {
//         test: /\.styl/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'postcss-loader',
//           'stylus-loader'
//         ]
//       },
//       {
//         test: /\.(png|jpe?g|gif)/i,
//         use: [{
//           loader: 'file-loader',
//         }]
//       }
//     ]
//   },
//   plugins: [
//     // 分离
//     new MiniCssExtractPlugin({
//       filename: "main.css",
//       // chunkFilename:'[id].css'
//     }),
//     // 压缩
//     new optimizeCss(),
//     // 分离HTML
//     new HTMLPlugin({
//       template: './public/index.html'
//     }),
//     new VueLoaderPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   devServer: {
//     // 服务器打开目录
//     contentBase: path.join(__dirname, 'dist'),
//     // 压缩
//     compress: true,
//     port: 9090,
//     hot: true,
//     open: true // 自动打开浏览器
//   },
//   resolve: {
//     extensions: ['.js', '.json', ".css"]
//   }
// }

const path = require("path");
// 分离CSS文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩CSS文件
const optimizeCss = require('optimize-css-assets-webpack-plugin');
// 分离HTML文件
const HTMLPlugin = require('html-webpack-plugin')
// 加载vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// webpack
const webpack = require('webpack')

module.exports = {
  // JavaScript 执行入口文件
  entry: {
    index: "./src/index.js",
    login: "./src/login/login.js"
  },
  // 模式区分：生产和开发环境
  mode: 'development',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [{
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    // css代码压缩
    new optimizeCss(),
    // 单独提取CSS文件
    new MiniCssExtractPlugin({
      filename: "main.css",
      chunkFilename: "[id].css"
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin({
      filename: './public/index.html',
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    open: true
  },
  resolve: {
    extensions: ['.js', '.json','.html','.css']
  }
};