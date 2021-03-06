/**
 * Karma configuration.
 *   references:
 *     http://karma-runner.github.io/0.13/config/configuration-file.html
 */

// local imports
var projectPaths = require('./projectPaths')
// TODO: do you want base config here? or client, server, or tests config?
var webpackBaseConfig = require(projectPaths.webpackBaseConfig)

// stay sane people
if (typeof projectPaths.testsGlob === 'undefined') {
    throw new Error('Hey.  Where\'s the tests glob?')
}


// annoying hack to be able to dynamically set keys on object
var preprocessors = {}
preprocessors[projectPaths.testsGlob] = ['webpack', 'sourcemap']


module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: projectPaths.rootDir,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'mocha',
        ],

        // list of files / patterns to load in the browser
        files: [
            projectPaths.testsGlob,
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: preprocessors,

        // configure webpack using settings from development webpack config
        webpack: {
            module: {
                loaders: webpackBaseConfig.module.loaders
            },
            resolve: webpackBaseConfig.resolve,
            plugins: webpackBaseConfig.plugins,
            devtool: 'inline-source-map',
        },

        webpackMiddleware: {
            noInfo: true,
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        // web server port
        port: 9876,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // logLevel: config.LOG_DISABLE,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome',
            'Firefox',
            'Safari',
        ],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-safari-launcher',
            'karma-sourcemap-loader',
            'karma-webpack',
        ]
    })
}
