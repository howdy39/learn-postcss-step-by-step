var gulp = require('gulp');

gulp.task('build', function () {
  var postcss = require('gulp-postcss');
  var customProperties = require('postcss-custom-properties');
  var nested = require('postcss-nested');

  var preProcessors = [
    customProperties
    , nested
  ];

  return gulp.src('./css/app.css')
    .pipe(postcss(preProcessors))
    .pipe(gulp.dest('./dist'));
});
