var gulp = require('gulp'),
  rename = require('gulp-rename'),
  sass = require('gulp-ruby-sass'),
  jade = require('gulp-jade');

var defaultViewBox = "0 0 32 32"
var icons = [{
  id: "backpack2"
}, {
  id: "backpack"
}, {
  id: "bill"
}, {
  id: "bookmark"
}, {
  id: "bookshelf"
}, {
  id: "briefcase"
}, {
  id: "bus"
}, {
  id: "calc"
}, {
  id: "candy"
}, {
  id: "car"
}, {
  id: "chalkboard"
}, {
  id: "clock"
}, {
  id: "cloud-check"
}, {
  id: "cloud-down"
}, {
  id: "cloud-error"
}, {
  id: "cloud-refresh"
}, {
  id: "cloud-up"
}, {
  id: "donut"
}, {
  id: "drop"
}, {
  id: "eye"
}, {
  id: "flag"
}, {
  id: "glasses"
}, {
  id: "glove"
}, {
  id: "hamburger"
}, {
  id: "hand"
}, {
  id: "hotdog"
}, {
  id: "knife"
}, {
  id: "label"
}, {
  id: "map"
}, {
  id: "map2"
}, {
  id: "marker"
}, {
  id: "mcfly"
}, {
  id: "medicine"
}, {
  id: "mountain"
}, {
  id: "muffin"
}, {
  id: "open-letter"
}, {
  id: "packman"
}, {
  id: "paper-plane"
}, {
  id: "photo 2"
}, {
  id: "piggy"
}, {
  id: "pin"
}, {
  id: "pizza"
}, {
  id: "r2d2"
}, {
  id: "rocket"
}, {
  id: "sale"
}, {
  id: "skull"
}, {
  id: "speakers"
}, {
  id: "store"
}, {
  id: "tactic"
}, {
  id: "toaster"
}, {
  id: "train"
}, {
  id: "umbrella"
}, {
  id: "watch"
}, {
  id: "www"
}]

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
    .pipe(gulp.dest('./public/'))

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
    .pipe(gulp.dest('./public/'))

  gulp.src(['icons.sass'])
    .pipe(sass())
    .pipe(gulp.dest('./public/'))
});
