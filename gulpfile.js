var gulp = require('gulp');

gulp.task('build', function () {
  var postcss = require('gulp-postcss');
  var customProperties = require('postcss-custom-properties');
  var nested = require('postcss-nested');
  var Import = require('postcss-import');

  var preProcessors = [
    Import
    , customProperties
    , nested
  ];

  return gulp.src('./css/app.css')
    .pipe(postcss(preProcessors))
    .pipe(gulp.dest('./dist'));
});
