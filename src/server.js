// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import favicon from 'serve-favicon'
import serveStatic from 'serve-static'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Helmet from 'react-helmet'
// local imports
import {
    buildDir,
    assetsDir,
    favicon as faviconPath,
} from 'config/projectPaths'
import Root from 'views/Root'
import renderTemplate from 'templates/index'


const server = express()


/* Server-wide Middleware */

// compress responses
server.use(compression())
// log requests
server.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
// serve favicon
server.use(favicon(faviconPath))


/* Routing */

// route static files to build and assets dirs
server.use('/static', serveStatic(buildDir), serveStatic(assetsDir))
// any url that hits this server
server.all('*', (req, res) => {
    const renderedComponent = renderToString(<Root />)

    // see: https://github.com/nfl/react-helmet#server-usage
    const helmet = Helmet.rewind()

    const html = renderTemplate({
        renderedComponent,
        title: helmet.title,
    })

    res.send(html)
})


export default server
