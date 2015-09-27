/* common react imports */
import React from 'react'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Root level component.
 */
@radium
class Root extends React.Component {
    constructor(...args) {
        // instantiate this
        super(...args)
        // set initial state
        this.state = {
            expanded: false,
        }
    }


    render() {
        return (<div style={styles.container}>
            <h1 style={styles.header}>
                The Mishkins
            </h1>
            <p style={styles.subheader}>
                More than just a family.
            </p>
            <p
                style={[
                    styles.more_text,
                    this.state.expanded && styles.fade_in,
                    !this.state.expanded && styles.fade_out,
                ]}
            >
                The Mishkins are a family, but they are also more.
            </p>
            <button
                type='button'
                style={styles.button}
                onClick={() => this.setState({expanded: !this.state.expanded})}
            >
                {this.state.expanded ? 'Learn Less' : 'Learn More'}
            </button>
        </div>)
    }
}


// export root component
export default Root


// end of file
