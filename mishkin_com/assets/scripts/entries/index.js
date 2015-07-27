/*
 * Main entry point.
 */

/* common react imports */
import React from 'react/addons'
/* local imports */
import Root from '../components/Root'


/* eslint-disable no-unused-vars */
// normalize css
import normalize from 'normalize.css'
// apply site style
import style from '../../styles/style.css'
/* eslint-enable */


// render root component to body
React.render(<Root />, document.body)


// end of file
