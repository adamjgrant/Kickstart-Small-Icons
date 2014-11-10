var gulp = require('gulp'),
  rename = require('gulp-rename'),
  sass = require('gulp-ruby-sass'),
  jade = require('gulp-jade'),
  replace = require('gulp-replace'),
  tap = require('gulp-tap')
  path = require('path');

var defaultViewBox = "0 0 32 32"

gulp.task('default', ['responsive']);

gulp.task('responsive', function() {
  gulp.src("./svgs/**/*.svg")
    .pipe(tap(function(file, t) {
      // Get filenames, without paths.
      console.log(path.basename(file.path, '.svg'))

      // Get "size" directory.
      console.log(path.dirname(path.relative('./svgs', file.path)))
    }))
    .pipe(gulp.dest('./public'));
});

// gulp.task('default', function() {
//   gulp.src(['*.svg.jade'])
//     .pipe(jade({
//       pretty: true,
//       locals: {
//         fs: require('fs'),
//         icons: icons,
//         defaultViewBox: defaultViewBox
//       }
//     }))
//     .pipe(rename('svg-defs.svg'))
//     .pipe(gulp.dest('./public/'))
//
//   gulp.src(['index.html.jade'])
//     .pipe(jade({
//       locals: {
//         fs: require('fs'),
//         icons: icons,
//         defaultViewBox: defaultViewBox
//       },
//       pretty: true
//     }))
//     .pipe(rename('index.html'))
//     .pipe(gulp.dest('./public/'))
//
//   gulp.src(['icons.sass'])
//     .pipe(sass())
//     .pipe(gulp.dest('./public/'))
// });
