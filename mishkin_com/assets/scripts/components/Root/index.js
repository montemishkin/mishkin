/*
 * Root level React component.
 */

/* common react imports */
import React from 'react/addons'
import classNames from 'classnames'


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
        return (<div className={'container'}>
            <div className={'banner'}>
                <h1 className={'header'}>
                    The Mishkins
                </h1>
                <h2 className={'subheader'}>
                    More than just a family.
                </h2>
            </div>
            <p className={classNames({
                more_text: true,
                expand: this.state.expanded,
                contract: !this.state.expanded,
            })}>
                The Mishkins are a family, but they are also more.
            </p>
            <button
                type='button'
                className={'button'}
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
