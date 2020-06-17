// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');


gulp.task('minify-css', () => {
  return gulp.src('portfolio/css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('portfolio/css'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('portfolio/css/*.css', ['minify-css'])
});


// Default Task
gulp.task('default', ['minify-css', 'watch']);