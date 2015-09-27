/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')


// project root directory
var rute = path.join(__dirname, '..')
// configuration directory
var config_dir = path.join(rute, 'config')
// source directory
var source_dir = path.join(rute, 'src')
// build directory
var build_dir = path.join(rute, 'build')
// apps directory
var apps_dir = path.join(source_dir, 'apps')
// entry points directory
var entries_dir = path.join(source_dir, 'entries')
// assets directory
var assets_dir = path.join(source_dir, 'assets')
// webpack config directory
var webpack_dir = path.join(config_dir, 'webpack')


// export the project paths|globs object
module.exports = {
    // directories
    root_dir: rute,
    source_dir: source_dir,
    apps_dir: apps_dir,
    build_dir: build_dir,
    asset_dir: assets_dir,
    // entry points
    client_entry: path.join(entries_dir, 'client.js'),
    server_entry: path.join(entries_dir, 'server.js'),
    // configuration files
    eslint_config: path.join(config_dir, 'eslint.json'),
    karma_config: path.join(config_dir, 'karma.js'),
    webpack_base_config: path.join(webpack_dir, 'base.js'),
    webpack_dev_config: path.join(webpack_dir, 'dev.js'),
    webpack_prod_config: path.join(webpack_dir, 'prod.js'),
    webpack_server_config: path.join(webpack_dir, 'server.js'),
    webpack_client_config: path.join(webpack_dir, 'client.js'),
}


// end of file
