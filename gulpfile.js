var gulp  		 = require('gulp'),
	 concat 		 = require('gulp-concat'),
	 sass 		 = require('gulp-sass'),
	 uglify      = require('gulp-uglify'),
	 cleanCSS    = require('gulp-clean-css');

var jsFiles     = './js/**/*.js'
	 jsAppFile   = './js/app.js',
	 jsAppOutput = './myApp.js',
	 jsDest 		 = './public/js',
	 sassFiles   = './build/sass/**/*.sass',
	 sassDest    = './public/css/';

gulp.task('js:build', function() {
	return gulp.src([jsAppFile, jsFiles])
	.pipe(concat(jsAppOutput))
	// .pipe(uglify())
	.pipe(gulp.dest(jsDest))
})

gulp.task('sass:build', function() {
	return gulp.src(sassFiles)
	.pipe(sass())
	.pipe(cleanCSS())
	.pipe(gulp.dest(sassDest));
})
gulp.task('watch', ['js:build','sass:build'], function() {
	gulp.watch(jsFiles, ['js:build'])
	gulp.watch(sassFiles, ['sass:build'])
})
gulp.task('default', ['js:watch'])