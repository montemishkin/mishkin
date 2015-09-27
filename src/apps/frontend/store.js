// third party imports
import React from 'react'
import {createStore as create_store, combineReducers} from 'redux'
// local imports
import reducers from './reducers'

// combine the reducers
const combined_reducers = combineReducers(reducers)

// create a store out of the reducers and some initial data
export function createStore(initial_data) {
    // pass the initial data to the store factory
    return create_store(combined_reducers, initial_data)
}

export default createStore()
