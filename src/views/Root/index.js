// third party imports
import React from 'react'
import {withState} from 'recompose'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import {compose} from 'redux'
import classnames from 'classnames'
// local imports
import styles from './styles.css'


function Root({isExpanded, setIsExpanded, browser}) {
    const headerStyle = browser.lessThan.medium
        ? styles.headerSmall
        : browser.lessThan.infinity
            ? styles.headerMedium
            : styles.headerInfinity

    return (
        <div className={styles.container}>
            <Helmet title='The Mishkins' />
            <h1 className={headerStyle}>
                The Mishkins
            </h1>
            <p className={styles.subheader}>
                More than just a family.
            </p>
            <p
                className={classnames(
                    styles.moreText,
                    isExpanded && styles.fadeIn,
                )}
            >
                The Mishkins are a family, but they are also more.
            </p>
            <button
                type='button'
                className={styles.button}
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
