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

        boxSizing: 'border-box',
        minHeight: '100%',
        padding: 100,

        backgroundColor: 'black',
        // black-paper pattern graciously provided by subtlepatterns.com
        backgroundImage: 'url(/static/images/black-paper.png)',
        color: 'white',
        fontFamily: 'courier, monospace',
    },


    header: {
        margin: 0,
        fontSize: 80,
        fontWeight: 'normal',
        textAlign: 'center',
    },


    subheader: {
        ...smallFont,
        margin: 0,
        textAlign: 'center',
    },


    moreText: {
        ...smallFont,
        marginTop: 15,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        textAlign: 'center',
    },


    button: {
        ...backgroundColorTransition,
        ...smallFont,
        marginTop: 20,
        borderWidth: 0,
        borderRadius: 10,
        outline: 0,
        padding: 20,
        backgroundColor: '#135196',

        ':hover': {
            backgroundColor: '#2361A6',
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
