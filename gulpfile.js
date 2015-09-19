/*
 * Defines common tasks used in development.
 */

/* common gulp imports */
var gulp = require('gulp')
var del = require('del')
var webpack = require('webpack-stream')
var named = require('vinyl-named')
var install = require('gulp-install')
var shell = require('gulp-shell')
var karma = require('karma').server
/* misc third party imports */
var assign = require('lodash/object/assign')
/* local imports */
var project_paths = require('./config/project_paths')


/* tasks */

/**
 * Remove all ouptut files from previous frontend builds.
 */
gulp.task('clean_previous_build', function(cb) {
    del(project_paths.build_dir, cb)
})


/**
 * Build frontend entry points with webpack (for development).
 */
gulp.task('build', ['clean_previous_build'], function() {
    var config = assign(
        {},
        require(project_paths.webpack_dev_config),
        {devtool: 'source-map'}
    )

    return gulp.src(project_paths.entries_glob)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Watch source for changes, (development) build on change.
 */
gulp.task('watch', ['clean_previous_build'], function() {
    var config = assign(
        {},
        require(project_paths.webpack_dev_config),
        {watch: true}
    )

    gulp.src(project_paths.entries_glob)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Build frontend entry points for production.
 */
gulp.task('production-build', ['clean_previous_build'], function() {
    var config = require(project_paths.webpack_live_config)

    return gulp.src(project_paths.entries_glob)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Run the frontend test suite once.
 */
gulp.task('test', function(cb) {
    karma.start({
        configFile: project_paths.karma_config,
        singleRun: true
    }, function() {
        cb()
    })
})


/**
 * Watch frontend source and tests for changes, run tests on change.
 */
gulp.task('tdd', function() {
    karma.start({
        configFile: project_paths.karma_config
    })
})


// end of file
