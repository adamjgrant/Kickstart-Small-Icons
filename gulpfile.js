var gulp = require('gulp'),
  jade = require('gulp-jade');

gulp.task('default', function() {
  gulp.src(['*.jade'])
    .pipe(jade({
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
    .pipe(gulp.dest('public/')); 
});
