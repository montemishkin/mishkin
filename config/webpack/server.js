// node imports
var fs = require('fs')
// third party imports
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var assign = require('lodash/object/assign')
// local imports
var projectPaths = require('../projectPaths')
var baseConfig = require(projectPaths.webpackBaseConfig)


// dict of node modules to treat as externals
// reference: http://jlongster.com/Backend-Apps-with-Webpack--Part-I
var nodeModules = fs.readdirSync('node_modules')
    // filter out the .bin dir
    .filter(function (dir) {
        return dir !== '.bin'
    })
    // create the data structure desired by webpack
    .reduce(function (state, dir) {
        var dummy = {}
        dummy[dir] = 'commonjs ' + dir

        return assign({}, state, dummy)
    }, {})


// extend base configuration's plugins
var plugins = baseConfig.plugins.concat(
    new ExtractTextPlugin('trash.css'),
    // add source map support
    new webpack.BannerPlugin(
        'require("source-map-support").install();',
        {raw: true, entryOnly: false}
    )
)

module.exports = assign({}, baseConfig, {
    target: 'node',
    // don't bundle node modules
    externals: nodeModules,
    plugins: plugins,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __dirname: true,
        __filename: true,
        path: true,
    },
})
