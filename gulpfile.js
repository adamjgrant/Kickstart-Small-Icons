var gulp = require('gulp'),
  rename = require('gulp-rename'),
  jade = require('gulp-jade');

var icons = [
  {
    id: "backpack",
    viewbox: "bar"
  }
]

gulp.task('default', function() {
  gulp.src(['*.svg.jade'])
    .pipe(jade({
      pretty: true,
      locals: {
        fs: require('fs'),
        icons: icons
      }
    }))
    .pipe(rename('svg-defs.svg'))
    .pipe(gulp.dest('./'))

  gulp.src(['index.html.jade'])
    .pipe(jade({
      locals: {
        icons: icons
      },
      pretty: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
});
