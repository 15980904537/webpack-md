let webpack = require('webpack');
let path=require('path')
module.exports = {
    entry: {
        react: ['react', 'react-dom'],
        lodash:['lodash','jquery']
    },
    output: {
        library: 'react',//导出a  给导出的内容加上一个属性名 
        libraryTarget:'commonjs2', //按照commonJs规范导出 导出的用处
        filename: '[name].dll.js'//`dll.js`标注是动态链接库
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'react',
            path:path.resolve(__dirname,'dist','manifest.json')
        })
    ]
}