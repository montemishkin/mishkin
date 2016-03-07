// third party imports
import React from 'react'
import Helmet from 'react-helmet'
// local imports
import styles from './styles.css'


class Root extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {
            isExpanded: false,
        }
    }


    toggleExpanded = () => this.setState({isExpanded: !this.state.isExpanded})


    render() {
        const {
            state: {isExpanded},
            toggleExpanded,
        } = this

        return (
            <div className={styles.container}>
                <Helmet title='The Mishkins' />
                <h1 className={styles.header}>
                    The Mishkins
                </h1>
                <p className={styles.subheader}>
                    More than just a family.
                </p>
                <p
                    className={isExpanded
                        ? styles.moreTextVisible
                        : styles.moreText
                    }
                >
                    The Mishkins are a family, but they are also more.
                </p>
                <button
                    type='button'
                    className={styles.button}
                    onClick={toggleExpanded}
                >
                    {isExpanded ? 'Learn Less' : 'Learn More'}
                </button>
            </div>
        )
    }
}


export default Root
