/**
 * Webpack configuration for client builds.
 */

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

// export only the additional configuration for client builds
module.exports = assign({},
    require(project_paths.webpack_base_config),
    further_config,
    {
        // additional client build configuration goes here
    }
)


// end of file
