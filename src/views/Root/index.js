// third party imports
import React from 'react'
import {withState} from 'recompose'
import radium from 'radium'
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

    return (
        <div style={styles.container}>
            <Helmet title='The Mishkins' />
            <h1 style={headerStyle}>
                The Mishkins
            </h1>
            <p style={styles.subheader}>
                More than just a family.
            </p>
            <p
                style={[
                    styles.moreText,
                    isExpanded && styles.fadeIn,
                    !isExpanded && styles.fadeOut,
                ]}
            >
                The Mishkins are a family, but they are also more.
            </p>
            <button
                type='button'
                style={styles.button}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? 'Learn Less' : 'Learn More'}
            </button>
        </div>
    )
}


export default compose(
    connect(({browser}) => ({browser})),
    withState('isExpanded', 'setIsExpanded', false),
    radium
)(Root)
