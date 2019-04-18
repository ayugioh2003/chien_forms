var gulp = require('gulp')
var clean = require('gulp-clean');
var extender = require('gulp-html-extend')
var browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

gulp.task('clean', function () {
  return gulp.src(['./forms',], { read: false })
    .pipe(clean());
});

gulp.task('extend', function () {
  gulp.src('./source/*.html')
    .pipe(extender({ annotations: true, verbose: false })) // default options
    .pipe(gulp.dest('./forms'))
    .pipe(browserSync.stream());
})

gulp.task('copyCSS', function () {
  return gulp.src('./source/**/*.css')
    .pipe(gulp.dest('./forms'))
    .pipe(browserSync.stream());
})

gulp.task('copyJS', function () {
  return gulp.src('./source/**/*.js')
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))
    .pipe(gulp.dest('./forms'))
    .pipe(browserSync.stream());
})

gulp.task('watch', function () {
  gulp.watch(['./source/*.html', 'layout.html'], ['extend'])
  gulp.watch(['./source/**/*.css'], ['copyCSS'])
  gulp.watch(['./source/**/*.js'], ['copyJS'])
})

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./forms",
      reloadDebounce: 2000
    }
  });
});

gulp.task('default', ['extend', 'copyCSS', 'copyJS', 'browser-sync', 'watch'])