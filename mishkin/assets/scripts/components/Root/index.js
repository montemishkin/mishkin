/*
 * Root level React component.
 */

/* common react imports */
import React from 'react/addons'
import Radium from 'radium'
/* local imports */
import styles from './styles'


// define component
@Radium
class Root extends React.Component {
    constructor(props) {
        super(props)

        // set initial state
        this.state = {
            expanded: false,
        }
    }


    // render component
    render() {
        return (<div style={styles.container}>
            <div style={styles.banner}>
                <h1 style={styles.header}>
                    The Mishkins
                </h1>
                <h2 style={styles.subheader}>
                    More than just a family.
                </h2>
            </div>
            <p style={[
                styles.more_text,
                this.state.expanded && styles.fade_in,
                !this.state.expanded && styles.fade_out,
            ]}>
                The Mishkins are a family, but they are also more.
            </p>
            <button
                type='button'
                style={styles.button}
                onClick={() => this.setState({expanded: !this.state.expanded})}
            >{this.state.expanded ? 'Learn Less' : 'Learn More'}</button>
        </div>)
    }
}


// export the component
export default Root


// end of file
