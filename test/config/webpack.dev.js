let { merge }=require('webpack-merge')
let base = require('../config/webpack.base');
let webpack = require('webpack')
let mock = require('../mock/index')
// let path=require('path')
let obj = merge(base, {
    mode: "development",
    devServer: {
        port: 3003,
        // open: true, //默认打开浏览器   --open
        compress: true,// 为文件开启 gzip压缩
        // contentBase: path.resolve(__dirname, '../assets'),// 吧这个文件夹做成了一个服务
        // https: true,// 适用于 后端服务是https的
        // proxy: {
        //     '/api': 'http://baidu.com',
        //     '/api1': 'http://163.com',
        //     '/api2': {
        //         // /api/qq     http://baidu.com/api/qq
        //         // /api2/qq     http://baidu.com/qq
        //         target: 'http:souyidai.com',
        //         pathRewrite: {
        //             '^/api2': ''
        //         }
        //     }
        // },
        before: mock

    
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        })
    ]
   })

console.log(obj)
module.exports = obj
