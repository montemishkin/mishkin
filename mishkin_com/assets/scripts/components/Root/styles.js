/*
 * Style sheet for Root component.
 */

/* local imports */
import colors from '../../../styles/colors'
import black_paper from '../../../images/black_paper.png'


/* constants */
const small_font_size = 20
const animation_params = '0.2s ease-in-out'


// define the style sheet
let styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        backgroundColor: 'black',
        /* black_paper pattern graciously provided by subtlepatterns.com */
        backgroundImage: `url(static/build/${black_paper})`,
        // backgroundImage: 'url(static/images/black_paper.png)',
        color: 'white',
        fontFamily: 'courier, monospace',
        fontWeight: 'normal',
    },

    banner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },

    header: {
        margin: 0,
        fontSize: 80,
        fontWeight: 'normal',
    },

    subheader: {
        margin: 0,
        fontSize: small_font_size,
        fontWeight: 'normal',
    },

    button: {
        marginTop: 40,
        border: 0,
        borderRadius: 10,
        outline: 0,
        padding: 20,
        fontSize: small_font_size,
        backgroundColor: colors.blue.darker,
        transition: `background-color ${animation_params}`,

        ':focus': {
            outline: 0,
        },

        ':hover': {
            backgroundColor: colors.blue.main,
            transition: `background-color ${animation_params}`,
        },
    },

    more_text: {
        fontSize: small_font_size,
        margin: '20 0 0 0',
    },

    fade_in: {
        opacity: 1,
        transition: `opacity ${animation_params}`,
    },

    fade_out: {
        opacity: 0,
        transition: `opacity ${animation_params}`,
    },
}


// export the style sheet
export default styles


// end of file
