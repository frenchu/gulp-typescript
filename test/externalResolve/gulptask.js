var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(newTS, lib, output, reporter) {
	var tsResult = gulp.src('test/externalResolve/test-2.ts')
		.pipe(sourcemaps.init())
		.pipe(newTS({
			declarationFiles: true,
			module: 'commonjs',
			typescript: lib
		}, reporter))
		.on('error', () => {});

	tsResult.dts.pipe(gulp.dest(output + 'dts'));
	return tsResult.js
		.pipe(sourcemaps.write('.', { sourceRoot: '../../../../externalResolve/' }))
		.pipe(gulp.dest(output + 'js'));
}
