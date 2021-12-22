let { merge } = require('webpack-merge')
let base = require('./webpack.base')
const TerserPlugin = require('terser-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
        // splitChunks: {
        //     // 可以把一些三方包单独打包出去
        //     cacheGroups: {
        //         jq_mo: {
        //             name: "jq_mo",
        //             test: /jquery|moment/,
        //             chunks: 'initial'
        //         }
        //     }
        // }
    },
   
})