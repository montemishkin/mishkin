// express imports
import express from 'express'
// import body_parser from 'body-parser'
// import multer from 'multer'
// import compression from 'compression'
// import cookie_session from 'cookie-session'
// import cookie_parser from 'cookie-parser'
// import logger from 'morgan'
// import session from 'express-session'
// import favicon from 'serve-favicon'
// import responseTime from 'response-time'
// import errorHandler from 'errorhandler'
// import vhost from 'vhost'
// import csrf from 'csurf'
// import directory from 'serve-index'
import serve_static from 'serve-static'
// local imports
import frontend from './apps/frontend'
import {build_dir, asset_dir} from '../config/project_paths'

// top level express application instance
const app = express()
// server port to listen on
const port = 8000

/* Configure Middleware */


/* Configure Routes */

// static assets
app.use('/static', serve_static(build_dir))
app.use('/static', serve_static(asset_dir))
// frontend application
app.use('/', frontend)


/* eslint-disable no-console */
// have server listen on port 8000
app.listen(port, () => console.log(`listening on ${port}`))
/* eslint-enable no-console */


// export application instance
export default app
