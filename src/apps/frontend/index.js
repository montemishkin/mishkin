// express imports
import express from 'express'
// react imports
import React from 'react'
import {renderToString} from 'react-dom/server'
// local imports
import {templatesDir} from 'config/projectPaths'
import Root from 'views/Root'

// create the express app
const app = express()


// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', templatesDir)


// any url that hits this app
app.all('*', (req, res) => {
    // render the jade template with the rendered component mounted
    res.render('index.jade', {
        renderedComponent: renderToString(<Root />),
    })
})


export default app


// end of file
