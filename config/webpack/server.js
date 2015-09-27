/**
 * Webpack configuration for server builds.
 */

// webpack imports
var webpack = require('webpack')
// misc third party imports
var assign = require('lodash/object/assign')
// local imports
var project_paths = require('../project_paths')


// default to using development configuration
var further_config = require(project_paths.webpack_dev_config)
// if we are in a production environment
if (process.env.NODE_ENV === 'production') {
    // use production configuration instead
    further_config = require(project_paths.webpack_prod_config)
}

// export only the additional configuration for server builds
module.exports = assign({},
    require(project_paths.webpack_base_config),
    further_config,
    {
        output: {
            libraryTarget: 'commonjs2',
        },
        target: 'node',
        node: {
            console: false,
            process: true,
            global: true,
            Buffer: true,
            __filename: false,
            __dirname: false,
        },
        externals: [
            // any required module that fits this regex is NOT bundled
            /^[a-zA-z\-0-9]+$/
        ],
        plugins: [
            new webpack.BannerPlugin(
                "require('source-map-support').install();",
                { raw: true, entryOnly: false }
            )
        ],
    }
)


// end of file
