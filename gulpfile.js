var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    fs = require('fs');

gulp.task('default', ['compile'], function() {
  connect.server({
    root: './'
  })
});

gulp.task('compile', function() {
  gulp.src(['./lib/*.sass'])
    .pipe(sass())
    .pipe(gulp.dest('./'))

  gulp.src(['./lib/*.js'])
    .pipe(gulp.dest('./'))

  return gulp.src(['./lib/*.jade'])
    .pipe(jade({
      locals: {
        fs: fs,
        icons: [
          {
            id: 'foo'
          },
          {
            id: 'bar'
          }
        ]
      }
    }))
    .pipe(gulp.dest('./'))
});
