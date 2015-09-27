// react imports
import React from 'react'
import react_dom from 'react-dom'
import {Router} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
// local imports
import routes from 'apps/frontend/routes'


/* eslint-disable no-unused-vars */
// normalize css
import normalize from 'normalize.css'
/* eslint-enable no-unused-vars */


// render the routed application
react_dom.render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('app')
)
