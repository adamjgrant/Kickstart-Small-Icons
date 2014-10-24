var gulp = require('gulp'),
  rename = require('gulp-rename'),
  jade = require('gulp-jade');

gulp.task('default', function() {
  gulp.src(['*.jade'])
    .pipe(jade({
      pretty: true,
      locals: {
        fs: require('fs'),
        icons: [
          {
            id: "backpack",
            viewbox: "bar"
          }
        ]
      }
    }))
    .pipe(rename('svg-defs.svg'))
    .pipe(gulp.dest('./'))
});
