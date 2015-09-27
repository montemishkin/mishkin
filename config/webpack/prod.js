/**
 * Additional configuration for production builds.
 */

// common webpack imports
var webpack = require('webpack')


// export only the additional configuration for production builds
module.exports = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ],
}


// end of file
