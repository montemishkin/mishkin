// fix browser land
import 'babel-core/polyfill'
// third party imports
import React from 'react'
import ReactDOM from 'react-dom'
// local imports
import Root from 'views/Root'


// render the root component to the dom
ReactDOM.render(
    <Root />,
    document.getElementById('app')
)
