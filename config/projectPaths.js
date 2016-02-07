/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')


var rootDir = path.join(__dirname, '..')
var configDir = path.join(rootDir, 'config')
var buildDir = path.join(rootDir, 'build')
var sourceDir = path.join(rootDir, 'src')
var assetsDir = path.join(sourceDir, 'assets')
var templatesDir = path.join(sourceDir, 'templates')
var webpackDir = path.join(configDir, 'webpack')
var clientEntry = path.join(sourceDir, 'client.js')
var serverEntry = path.join(sourceDir, 'index.js')
var clientBuild = path.join(buildDir, path.basename(clientEntry))
var serverBuild = path.join(buildDir, path.basename(serverEntry))


module.exports = {
    // directories
    rootDir: rootDir,
    sourceDir: sourceDir,
    buildDir: buildDir,
    templatesDir: templatesDir,
    assetsDir: assetsDir,
    // entry points
    clientEntry: clientEntry,
    serverEntry: serverEntry,
    // built files
    clientBuild: clientBuild,
    serverBuild: serverBuild,
    // globs
    clientBuildGlob: path.join(clientBuild, '*'),
    serverBuildGlob: path.join(serverBuild, '*'),
    cssGlob: path.join(assetsDir, 'styles', 'css', '*'),
    testsGlob: path.join(sourceDir, '**', 'tests.js'),
    // configuration files
    eslintConfig: path.join(configDir, 'eslint.json'),
    karmaConfig: path.join(configDir, 'karma.js'),
    webpackBaseConfig: path.join(webpackDir, 'base.js'),
    webpackClientConfig: path.join(webpackDir, 'client.js'),
    webpackServerConfig: path.join(webpackDir, 'server.js'),
}
