// node imports
var path = require('path')
// third party imports
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var assign = require('lodash/object/assign')
// local imports
var projectPaths = require('../projectPaths')
var baseConfig = require(projectPaths.webpackBaseConfig)


var plugins = baseConfig.plugins.concat(
    new ExtractTextPlugin(path.basename(projectPaths.cssBuild))
)


module.exports = assign({}, baseConfig, {
    plugins: plugins,
})
