const gulp = require('gulp')
const watch = require('gulp-watch')

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/img/**/*.*', () => gulp.series('appIMG')())
    return (cb)
}
module.exports = {
    monitorarArquivos

}