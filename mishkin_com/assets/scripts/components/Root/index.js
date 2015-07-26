/*
 * Root level React component.
 */

/* common react imports */
import React from 'react/addons'
/* local imports */
import styles from './styles'


// define component
class Root extends React.Component {
    constructor(props) {
        super(props)

        // set initial state
        this.state = {
            expanded: false,
            button_focus: false,
            button_hover: false,
        }
    }


    // render component
    render() {
        return (<div style={styles.container}>
            <p style={styles.big_text}>
                The Mishkins
            </p>
            <p style={styles.small_text}>
                more than just a family
            </p>
            <p styles={[
                styles.small_text,
                this.state.expanded && styles.expand,
                !this.state.expanded && styles.contract,
            ]}>
                The Mishkins are a family, but they are also more.
            </p>
            <button
                type='button'
                styles={[
                    styles.button,
                    this.state.button_focus && styles.button_focus,
                    this.state.button_hover && styles.button_hover,
                ]}
                onClick={() => this.setState({expanded: !this.state.expanded})}
                onFocus={() => this.setState({button_focus: true})}
                onBlur={() => this.setState({button_focus: false})}
                onMouseEnter={() => this.setState({button_hover: true})}
                onMouseLeave={() => this.setState({button_hover: false})}
            >{[
                'Learn More',
                'Learn Less',
            ][+this.state.expanded]}</button>
        </div>)
    }
}


// export the component
export default Root


// end of file
