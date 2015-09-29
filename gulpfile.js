"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
//var files = ['*/**.js', '!./node_modules/**'];
var webpack = require('webpack-stream');
var watch = require('gulp-watch');

//pipe webpack
//all dependencies for client and server are in one file, is the plan
gulp.task('webpack:dev', function() {
  return gulp.src('./app/js/client.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
    .pipe(gulp.dest('build/'));
})

gulp.task('staticfiles:dev', function() {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('build/'))
})

//call as gulp watch
gulp.task('watch', function () {
  return gulp.watch(['app/**/*'], ['build:dev']);
});

gulp.task('build:dev', ['staticfiles:dev', 'webpack:dev']);
gulp.task('default', ['build:dev']);


