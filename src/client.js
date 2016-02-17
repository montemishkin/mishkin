// fix browser land
import 'babel-core/polyfill'
// third party imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {StyleSheet} from 'aphrodite'
// local imports
import Root from 'views/Root'
import {createStore} from 'store'


if (process.env.NODE_ENV === 'production') {
    // Google Analytics
    // see: https://developers.google.com/analytics/devguides/collection/analyticsjs/
    /* eslint-disable */
    window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
    ga('create', 'UA-68929870-1', 'auto');
    /* eslint-enable */
} else {
    /* eslint-disable */
    window.ga = window.ga || function () {};
    /* eslint-enable */
}


// send a pageview hit to google analytics
ga('send', 'pageview')


// grab initial application state passed from server
const initialState = window.__INITIAL_STATE__
// instantiate client store with initial application state
const store = createStore(initialState)

// grab rendered css class names passed from server
const renderedClassNames = window.__RENDERED_CLASS_NAMES__
// rehydrate stylesheet with already rendered css class names
StyleSheet.rehydrate(renderedClassNames)


// render application to dom
ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('app')
)
