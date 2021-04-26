const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulptasks/app')
const { depsCSS, depsFONT } = require('./gulptasks/deps')
const { monitorarArquivos, servidor } = require('./gulptasks/server')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFONT),
    ),
    servidor,
    monitorarArquivos,
)