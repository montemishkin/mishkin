// third party imports
import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'


export default combineReducers({
    browser: createResponsiveStateReducer({
        small: 400,
        medium: 700,
    }),
})
