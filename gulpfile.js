// gulp imports
var gulp = require('gulp')
var del = require('del')
var webpack = require('webpack-stream')
var named = require('vinyl-named')
var shell = require('gulp-shell')
// misc third party imports
var assign = require('lodash/object/assign')
// local imports
var project_paths = require('./config/project_paths')


/**
 * Run the server.
 */
gulp.task('runserver', shell.task('nodemon ' + project_paths.server_entry))


/**
 * Build client and server entry points.
 */
gulp.task('watch', ['clean', 'watch-client', 'watch-server'])


/**
 * Build client entry point.
 */
gulp.task('watch-client', function() {
    var config = assign({}, require(project_paths.webpack_client_config), {
        watch: true,
    })

    return gulp.src(project_paths.client_entry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Build server entry point.
 */
gulp.task('watch-server', function() {
    var config = assign({}, require(project_paths.webpack_server_config), {
        watch: true,
    })

    return gulp.src(project_paths.server_entry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Build client and server entry points.
 */
gulp.task('build', ['clean', 'build-client', 'build-server'])


/**
 * Build client entry point.
 */
gulp.task('build-client', function() {
    return gulp.src(project_paths.client_entry)
        .pipe(named())
        .pipe(webpack(require(project_paths.webpack_client_config)))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Build server entry point.
 */
gulp.task('build-server', function() {
    return gulp.src(project_paths.server_entry)
        .pipe(named())
        .pipe(webpack(require(project_paths.webpack_server_config)))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Remove all ouptut files from previous frontend builds.
 */
gulp.task('clean', function() {
    del.sync(project_paths.build_dir)
})


// end of file
