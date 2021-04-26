const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('production')
        .pipe(webserver({
            port: 3000,
            directoryListing: true,
            livereload: true,
            open: true,
        }))
}
function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return (cb)
}
module.exports = {
    monitorarArquivos,
    servidor,
}