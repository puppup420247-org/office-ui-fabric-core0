// Add plugins here to use throughout the fabric build
var Plugins = function() {
	this.gulp = require('gulp');
	this.del = require('del');
	this.fs = require('fs');
	this.less = require('gulp-less');
	this.batch = require('gulp-batch');
	this.cssMinify = require('gulp-minify-css');
	this.csscomb = require('gulp-csscomb');
	this.cssbeautify = require('gulp-cssbeautify');
	this.file = require('gulp-file');
	this.flipper = require('gulp-css-flipper');
	this.autoprefixer = require('gulp-autoprefixer');
	this.mergeStream = require('merge-stream');
	this.rename = require('gulp-rename');
	this.es = require('event-stream');
	this._ = require('lodash');
	this.pkg = require('../package.json');
	this.header = require('gulp-header');
	this.zip = require('gulp-zip');
	this.gutil = require('gulp-util');
	this.runSequence = require('run-sequence');
	this.template = require('gulp-template');
	this.concat = require('gulp-concat');
	this.tap = require('gulp-tap');
	this.data = require('gulp-data');
	this.folders = require('gulp-folders');
	this.foreach = require('gulp-foreach');
	this.browserSync = require('browser-sync').create();
	this.colors = require('colors/safe');
	this.path = require('path');
	this.wrap = require('gulp-wrap');
	this.uglify = require('gulp-uglify');
	this.nugetpack = require('gulp-nuget-pack');
	this.requireDir = require('require-dir');
}

module.exports = new Plugins();