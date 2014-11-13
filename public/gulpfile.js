var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-ruby-sass'),
    fs = require('fs');

gulp.task('default', function() {
  gulp.src(['*.sass'])
    .pipe(sass())
    .pipe(gulp.dest('./public'))

  gulp.src(['*.js'])
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
