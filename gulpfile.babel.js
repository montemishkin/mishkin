// third party imports
import gulp from 'gulp'
import del from 'del'
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import env from 'gulp-env'
import shell from 'gulp-shell'
import karma from 'karma'
// local imports
import {
    buildDir,
    serverBuild,
    clientBuildGlob,
    serverBuildGlob,
    clientEntry,
    serverEntry,
    webpackClientConfig as webpackClientConfigPath,
    webpackServerConfig as webpackServerConfigPath,
    karmaConfig as karmaConfigPath,
} from './config/projectPaths'
const webpackClientConfig = require(webpackClientConfigPath)
const webpackServerConfig = require(webpackServerConfigPath)


/**
 * Run the development server.
 */
gulp.task('runserver', shell.task('nodemon ' + serverBuild))


/**
 * Build client entry point.
 */
gulp.task('build-client', ['clean-client'], () => {
    return gulp.src(clientEntry)
               .pipe(named())
               .pipe(webpack(webpackClientConfig))
               .pipe(gulp.dest(buildDir))
})


/**
 * Build server entry point.
 */
gulp.task('build-server', ['clean-server'], () => {
    return gulp.src(serverEntry)
               .pipe(named())
               .pipe(webpack(webpackServerConfig))
               .pipe(gulp.dest(buildDir))
})


/**
 * Watch client entry point.
 */
gulp.task('watch-client', ['clean-client'], () => {
    const config = {
        ...webpackClientConfig,
        watch: true,
    }

    return gulp.src(clientEntry)
               .pipe(named())
               .pipe(webpack(config))
               .pipe(gulp.dest(buildDir))
})


/**
 * Watch server entry point.
 */
gulp.task('watch-server', ['clean-server'], () => {
    const config = {
        ...webpackServerConfig,
        watch: true,
    }

    return gulp.src(serverEntry)
               .pipe(named())
               .pipe(webpack(config))
               .pipe(gulp.dest(buildDir))
})


/**
 * Build client entry point for production.
 */
gulp.task('build-client-production', ['clean-client'], () => {
    // set environment variable
    env({
        vars: {
            NODE_ENV: 'production',
        },
    })
    // build client
    return gulp.src(clientEntry)
               .pipe(named())
               .pipe(webpack(webpackClientConfig))
               .pipe(gulp.dest(buildDir))
})


/**
 * Build server entry point for production.
 */
gulp.task('build-server-production', ['clean-server'], () => {
    // set environment variable
    env({
        vars: {
            NODE_ENV: 'production',
        },
    })
    // build server
    return gulp.src(serverEntry)
               .pipe(named())
               .pipe(webpack(webpackServerConfig))
               .pipe(gulp.dest(buildDir))
})


/**
 * Remove all ouptut files from previous client builds.
 */
gulp.task('clean-client', () => {
    del.sync(clientBuildGlob)
})


/**
 * Remove all ouptut files from previous server builds.
 */
gulp.task('clean-server', () => {
    del.sync(serverBuildGlob)
})


/**
 * Run the test suite once.
 */
gulp.task('test', (cb) => {
    const server = new karma.Server({
        configFile: karmaConfigPath,
        singleRun: true
    }, () => cb())

    server.start()
})


/**
 * Watch source and tests for changes, run tests on change.
 */
gulp.task('tdd', () => {
    const server = new karma.Server({
        configFile: karmaConfigPath,
    })

    server.start()
})


// end of file
