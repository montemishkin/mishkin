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
            mouse_is_down: false,
            has_been_clicked: false,
            button_is_hovered: false,
        }
    }


    // render component
    render() {
        let dynamic_content = (
            <button
                type='button'
                styles={[
                    styles.button,
                    this.state.button_is_hovered && styles.button_hover,
                    this.state.mouse_is_down && styles.button_mouse_down,
                ]}
                onClick={() => this.setState({has_been_clicked: true})}
                onMouseEnter={() => this.setState({button_is_hovered: true})}
                onMouseLeave={() => this.setState({button_is_hovered: false})}
                onMouseDown={() => this.setState({mouse_is_down: true})}
                onMouseUp={() => this.setState({mouse_is_down: false})}
            >
                Learn More
            </button>
        )

        if (this.state.has_been_clicked) {
            dynamic_content = (
                <p style={styles.small_text}>Seriously.</p>
            )
        }


        return (<div style={styles.container}>
            <p style={styles.big_text}>
                {"Don't mess with"}
            </p>
            <p style={styles.big_text}>
                The Mishkins.
            </p>
            {dynamic_content}
        </div>)
    }
}


// export the component
export default Root


// end of file
