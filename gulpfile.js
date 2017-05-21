// Requires
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');


// tâche CSS = compile vers knacss.css et knacss-unminified.css
gulp.task('css', function () {
  return gulp.src('./src/asset/css/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'Firefox ESR', 'last 2 versions', 'not ie <= 10'],
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist/asset/css/'))
    .pipe(rename('style.min.css'))
    .pipe(csso())
    .pipe(gulp.dest('./dist/asset/css/'));
});

// Watcher
gulp.task('watch', function() {
  gulp.watch(['./scss/*.scss'], ['css']);
});

gulp.task('default', ['css']);