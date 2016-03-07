// fix browser land
import 'babel-polyfill'
// third party imports
import React from 'react'
import ReactDOM from 'react-dom'
// local imports
import Root from 'views/Root'


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


// apply global styles
import 'styles/css/normalize.css'
import 'styles/css/main.css'


// render application to dom
ReactDOM.render(
    <Root />,
    document.getElementById('app')
)
