const webpack = require('webpack')
const modeDev = process.env.NODE_ENV !== 'production'
const minicssextractplugin = require('mini-css-extract-plugin')
const optimizecssassetsplugin = require('optimize-css-assets-webpack-plugin')
const loader = require('sass-loader')

module.exports = {
    mode: modeDev ? 'development' : 'production',
    entry: './src/entry.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 3005
    },
    plugins: [
        new minicssextractplugin({
            filename: 'style.css',
        }),
        new optimizecssassetsplugin({})
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                minicssextractplugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}