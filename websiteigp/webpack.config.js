const { LibManifestPlugin } = require('webpack')
const modeDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const minicssextractplugin = require('mini-css-extract-plugin')
const terserplugin = require('terser-webpack-plugin')
const optimizecssassetsplugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modeDev ? 'development' : 'production',
    entry: './src/first.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new terserplugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new optimizecssassetsplugin({})
        ]
    },
    plugins: [
        new minicssextractplugin({
            filename: '/css/style.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                minicssextractplugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    }
}