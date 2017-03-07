'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');

gulp.task('default', function (cb) {
	gulp.src('./src/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./assets'));
	// gulp.src('./src/**/*.js')
	// 	.pipe()
	// 	.pipe()
	// 	.pipe(gulp.dest('./assets/'))
	pump([
		gulp.src('./src/**/*.js'),
		uglify(),
		concat('app.min.js'),
		gulp.dest('./assets/scripts')
	], cb)
});