// common styling for small font
const smallFont = {
    fontSize: 20,
}

// transition parameters common to all transition styles
const transitionParameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
}

// background color transition class
const backgroundColorTransition = {
    ...transitionParameters,
    transitionProperty: 'background-color',
}

// opacity transition class
const opacityTransition = {
    ...transitionParameters,
    transitionProperty: 'opacity',
}


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        backgroundColor: 'black',
        /* black-paper pattern graciously provided by subtlepatterns.com */
        backgroundImage: 'url(/static/images/black-paper.png)',
        color: 'white',
        fontFamily: 'courier, monospace',
        fontWeight: 'normal',
    },

    header: {
        margin: 0,
        fontSize: 80,
        fontWeight: 'normal',
    },

    subheader: {
        ...smallFont,
        margin: 0,
    },

    moreText: {
        ...smallFont,
        marginTop: 20,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
    },

    button: {
        ...backgroundColorTransition,
        ...smallFont,
        marginTop: 40,
        borderWidth: 0,
        borderRadius: 10,
        outline: 0,
        padding: 20,
        backgroundColor: '#205692',

        ':focus': {
            outline: 0,
        },

        ':hover': {
            ...backgroundColorTransition,
            backgroundColor: '#104581',
        },
    },

    fadeIn: {
        ...opacityTransition,
        opacity: 1,
    },

    fadeOut: {
        ...opacityTransition,
        opacity: 0,
    },
}


// end of file
