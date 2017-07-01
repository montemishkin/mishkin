// third party imports
import express from 'express'
import logger from 'morgan'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Helmet from 'react-helmet'
// local imports
import Root from 'views/Root'
import renderTemplate from 'templates/index'


const server = express()


/* Server-wide Middleware */

// log requests
server.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))


/* Routing */

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
