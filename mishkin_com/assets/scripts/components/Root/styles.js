/*
 * Style sheet for Root component.
 */

/* common react imports */
import StyleSheet from 'react-style'
/* local imports */
import colors from '../../../styles/colors'
import black_paper from '../../../images/black_paper.png'


// define the style sheet
let styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        // black_paper pattern graciously provided by subtlepatterns.com
        backgroundImage: `url(static/build/${black_paper})`,
        // backgroundImage: 'url(static/images/black_paper.png)',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'courier,  monospace',
    },

    big_text: {
        display: 'inline',
        margin: 20,
        fontSize: 80,
    },

    small_text: {
        margin: 55,
        padding: 20,
        fontSize: 20,
    },

    button: {
        margin: 55,
        border: 0,
        borderRadius: 10,
        padding: 20,
        fontSize: 20,
        backgroundColor: colors.blue.darker,
        transition: 'background-color 0.2s ease-in-out',
    },

    button_hover: {
        backgroundColor: colors.blue.main,
        transition: 'background-color 0.2s ease-in-out',
    },

    button_mouse_down: {
        outline: 0,
    },
})


// export the style sheet
export default styles


// end of file
