// third party imports
import React from 'react'
import {withState} from 'recompose'
import {css} from 'aphrodite'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import {compose} from 'redux'
// local imports
import styles from './styles'


function Root({isExpanded, setIsExpanded, browser}) {
    const headerStyle = browser.lessThan.medium
        ? styles.headerSmall
        : browser.lessThan.infinity
            ? styles.headerMedium
            : styles.headerInfinity

    // inject `moreText` + `fadeIn` styles regardless of whether expanded or not
    // (to avoid jitter when waiting for injection on first expansion)
    css(styles.moreText, styles.fadeIn)

    return (
        <div className={css(styles.container)}>
            <Helmet title='The Mishkins' />
            <h1 className={css(headerStyle)}>
                The Mishkins
            </h1>
            <p className={css(styles.subheader)}>
                More than just a family.
            </p>
            <p
                className={css(
                    styles.moreText,
                    isExpanded && styles.fadeIn,
                )}
            >
                The Mishkins are a family, but they are also more.
            </p>
            <button
                type='button'
                className={css(styles.button)}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? 'Learn Less' : 'Learn More'}
            </button>
        </div>
    )
}


export default compose(
    connect(({browser}) => ({browser})),
    withState('isExpanded', 'setIsExpanded', false)
)(Root)
