/*
 * Style sheet for Root component.
 */

/* common react imports */
import StyleSheet from 'react-style'
/* local imports */
import colors from '../../../styles/colors'
import black_paper from '../../../images/black_paper.png'


/* constants */
const big_margin = 55
const small_margin = 10
const padding = 20
const big_font_size = 80
const small_font_size = 20
const animation_params = '0.2s ease-in-out'


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
        fontSize: big_font_size,
        fontWeight: 'normal',
    },

    subheader: {
        margin: 0,
        fontSize: small_font_size,
        fontWeight: 'normal',
    },

    more_text: {
        // padding: padding,
        marginTop: big_margin,
    },

    button: {
        marginTop: big_margin,
        border: 0,
        borderRadius: 10,
        outline: 0,
        padding: padding,
        fontSize: small_font_size,
        backgroundColor: colors.blue.darker,
        transition: `background-color ${animation_params}`,
    },

    button_focus: {
        outline: 0,
    },

    button_hover: {
        backgroundColor: colors.blue.main,
        transition: `background-color ${animation_params}`,
    },

    expand: {
        opacity: 1,
        transition: `all ${animation_params}`,
    },

    contract: {
        opacity: 0,
        height: 0,
        margin: 0,
        border: 0,
        padding: 0,
        transition: `all ${animation_params}`,
    },

})


// export the style sheet
export default styles


// end of file
