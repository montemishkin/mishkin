// fix node land
import 'babel-core/polyfill'
// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import serveStatic from 'serve-static'
import React from 'react'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import Helmet from 'react-helmet'
// local imports
import {buildDir, assetsDir, templatesDir} from 'config/projectPaths'
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


/* Routing */

// route static files to build and assets dirs
server.use('/static', serveStatic(buildDir), serveStatic(assetsDir))
// any url that hits this server
server.all('*', (req, res) => {
    const store = createStore()
    const renderedComponent = renderToString(
        <Provider store={store}>
            <Root
                radiumConfig={{
                    userAgent: req.headers['user-agent'],
                }}
            />
        </Provider>
    )

    const initialState = JSON.stringify(store.getState())

    // see: https://github.com/nfl/react-helmet#server-usage
    Helmet.rewind()

    // render the jade template with the rendered component mounted
    res.render('index.jade', {
        initialState,
        renderedComponent,
    })
})


export default server
