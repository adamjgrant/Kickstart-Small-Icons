var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    fs = require('fs');

gulp.task('default', ['compile'], function() {
  connect.server({
    root: 'public'
  })
});

gulp.task('compile', function() {
  gulp.src(['*.sass'])
    .pipe(sass())
    .pipe(gulp.dest('./public'))

  gulp.src(['*.js', '!gulpfile.js'])
    .pipe(gulp.dest('./public'))

  return gulp.src(['*.jade'])
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
    .pipe(gulp.dest('./public'))
});
