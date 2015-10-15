// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


@radium
export default class Root extends React.Component {
    constructor(...args) {
        // instantiate `this`
        super(...args)
        // set initial state
        this.state = {
            isExpanded: false,
        }
    }


    render() {
        const {isExpanded} = this.state

        return (<div style={styles.container}>
            <h1 style={styles.header}>
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
                onClick={() => this.setState({isExpanded: !isExpanded})}
            >
                {isExpanded ? 'Learn Less' : 'Learn More'}
            </button>
        </div>)
    }
}


// end of file
