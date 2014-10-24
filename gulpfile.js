var gulp = require('gulp'),
  rename = require('gulp-rename'),
  sass = require('gulp-ruby-sass'),
  jade = require('gulp-jade');

var defaultViewBox = "0 0 32 32"
var icons = [
  { id: "backpack" },
  { id: "clock" }
]

gulp.task('default', function() {
  gulp.src(['*.svg.jade'])
    .pipe(jade({
      pretty: true,
      locals: {
        fs: require('fs'),
        icons: icons,
        defaultViewBox: defaultViewBox
      }
    }))
    .pipe(rename('svg-defs.svg'))
    .pipe(gulp.dest('./'))

  gulp.src(['index.html.jade'])
    .pipe(jade({
      locals: {
        fs: require('fs'),
        icons: icons,
        defaultViewBox: defaultViewBox
      },
      pretty: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))

  gulp.src(['icons.sass'])
    .pipe(sass())
    .pipe(gulp.dest('./'))
});
