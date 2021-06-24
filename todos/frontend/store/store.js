import { createStore } from 'redux'
import rootReducer from '../reducers/root_reducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { thunk } from '../middleware/thunk'
const addLoggingToDispatch = function(store){   //basic middleware implementation
    return function(next){
        return function(action){
            console.log(store.getState())
            console.log(`\n Action: ${action} \n`)
            next(action)
            console.log(store.getState())
        }
    }
}

//takes in store, returns from that function the next middleware to be executed that function returns the middleware, and then the middleware calls next action
//in this function, next is what the dispatch

export const configureStore = function(defaultState = {}){
    return createStore(rootReducer, defaultState, applyMiddleware(thunk, logger))
}

