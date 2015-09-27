// node imports
import path from 'path'
// express imports
import express from 'express'
// react imports
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router'
import createLocation from 'history/lib/createLocation'
// local imports
import routes from './routes'

// create the express app
const app = express()


// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))


// any url that hits this app
app.all('*', (req, res) => {
    // figure out the location from the url
    const location = createLocation(req.url)
    // figure out the appropriate route
    match({routes, location}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search)
        } else if (error) {
            res.status(500).send(error.message)
        } else if (renderProps === null) {
            res.status(404).send('Not found')
        // otherwise the component was found
        } else {
            // render the jade template with the rendered component mounted
            res.render('index.jade', {
                renderedComponent: renderToString(
                    <RoutingContext {...renderProps} />
                ),
            })
        }
    })
})


// export the application
export default app


// end of file
