const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/assets/js/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/build'
    },
}