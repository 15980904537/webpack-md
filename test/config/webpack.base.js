let path = require('path')
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
let  MiniCssExtractPlugin = require('mini-css-extract-plugin');
let webpack = require('webpack')

module.exports = {
    // mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'hello.[hash:6].js',//打包的资源文件
        path: path.resolve(__dirname, '../dist')

    },
    module: {
        rules: [
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'], exclude: /node_modules/ },
            { test: /\.less$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'], exclude: /node_modules/ },
            {
                test: /\.(jpg|png|webp|jpeg|gif|ico)/i,
                use: {
                    loader:'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name].[ext]'
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/i,
                use: 'babel-loader',
                exclude: /node_modules/
            }
            
        ],
    },
    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!hello.html'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index123.html',
            // template: path.resolve(__dirname, 'plublic/index.html'),
            filename: 'index.html',
            title: '我的程序',
            // title1: "<link href='https://baidu.com/1.css'>"

        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            '$$': 'jquery',
            // 'React': 'react'
        }),
    ],
    resolve: {
        alias: {
            '@':path.resolve(__dirname,'../src')
        },
        extensions: ['.js', '.json', '.vue', '.css'],
        modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },
    externals: {
        jquery: 'jQuery',
    },
}