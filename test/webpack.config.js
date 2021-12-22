let path=require('path')
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const { webpack } = require('webpack');
let addAssetHtmlWebpackPlugin=require('add-asset-html-webpack-plugin')
module.exports = {
    mode: 'development',//开发模式,默认是production
    entry: './src/index.js', //默认是index.js
    output: {
        filename: 'hello.[hash].js',//打包的资源文件
        path:path.resolve(__dirname,'app')  //打包的文件路径,需要绝对路径
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!hello.html'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index123.html',
            // template: path.resolve(__dirname, 'plublic/index.html'),
            filename: 'qqq.html',
            title: '我的程序',
            title1: "<link href='https://baidu.com/1.css'>"
            
        }),

        //dll链接库 在打包之后给html加上一些数据（add-asset-html-webpack-plugin）
        new webpack.DllReferencePlugin({//引用dllPlugin
            manifest: path.resolve(__dirname, 'dist','react.manifest.json')
        }),

        //或者
        new addAssetHtmlWebpackPlugin({ //添加资源插件
            manifest: path.resolve(__dirname, 'dist', 'react.dll.json')
        })
    ]
}