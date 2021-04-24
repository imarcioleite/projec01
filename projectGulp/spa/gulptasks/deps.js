const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ 'uglyComments': false }))
        .pipe(concat('app.deps.css'))
        .pipe(gulp.dest('production/assets/css'))
}
function depsFONT() {
    return gulp.src('node_modules/font-awesome/fonts/**/*.*')
        .pipe(gulp.dest('production/assets/fonts'))
}
module.exports = {
    depsCSS,
    depsFONT,
}