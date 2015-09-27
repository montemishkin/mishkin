// react imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import RootComponent from './components/Root'


export default (
    <Route path='/' component={RootComponent}>
        <IndexRoute component={RootComponent} />
    </Route>
)
