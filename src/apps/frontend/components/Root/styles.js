/**
 * Style sheet for Root component.
 */


// common styling for small font
const small_font = {
    fontSize: 20,
}

// transition parameters common to all transition styles
const transition_parameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
}

// background color transition class
const background_color_transition = {
    ...transition_parameters,
    transitionProperty: 'background-color',
}

// opacity transition class
const opacity_transition = {
    ...transition_parameters,
    transitionProperty: 'opacity',
}


// define the style sheet
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        backgroundColor: 'black',
        /* black_paper pattern graciously provided by subtlepatterns.com */
        backgroundImage: 'url(static/images/black_paper.png)',
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
        ...small_font,
        margin: 0,
    },

    more_text: {
        ...small_font,
        marginTop: 20,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
    },

    button: {
        ...background_color_transition,
        ...small_font,
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
            ...background_color_transition,
            backgroundColor: '#104581',
        },
    },

    fade_in: {
        ...opacity_transition,
        opacity: 1,
    },

    fade_out: {
        ...opacity_transition,
        opacity: 0,
    },
}


// export the style sheet
export default styles


// end of file
