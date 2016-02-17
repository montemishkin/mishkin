// fix node land
import 'babel-core/polyfill'
// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import favicon from 'serve-favicon'
import serveStatic from 'serve-static'
import React from 'react'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import {StyleSheetServer} from 'aphrodite'
import Helmet from 'react-helmet'
// local imports
import {
    buildDir,
    assetsDir,
    templatesDir,
    favicon as faviconPath,
} from 'config/projectPaths'
import Root from 'views/Root'
import {createStore} from 'store'


const server = express()


/* Application-wide Settings */

// use jade as the templating engine
server.set('view engine', 'jade')
server.set('views', templatesDir)


/* Application-wide Middleware */

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
    const store = createStore()
    const {html, css} = StyleSheetServer.renderStatic(() => renderToString(
        <Provider store={store}>
            <Root />
        </Provider>
    ))

    // see: https://github.com/nfl/react-helmet#server-usage
    Helmet.rewind()

    res.render('index.jade', {
        initialState: JSON.stringify(store.getState()),
        renderedComponent: html,
        renderedClassNames: JSON.stringify(css.renderedClassNames),
        css: css.content,
    })
})


export default server
