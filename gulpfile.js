'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglifyes = require('uglify-es');
var composer = require('gulp-uglify/composer');
var uglify = composer(uglifyes, composer);

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

	// pump([
	// 	gulp.src('./src/**/*.js'),
	// 	uglify(),
	// 	concat('app.min.js'),
	// 	gulp.dest('./assets/scripts')
	// ], cb)

	gulp.src('./src/**/*.js')
		.pipe(uglify())
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('./assets/scripts'))
});