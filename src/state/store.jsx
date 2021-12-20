import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import listReducer from './reducers/list-reducer'

export const initialState = {
    list: {
        get_status: 'void',
        get_data: null,
        get_error: null
    }
}

// SELECTORS
export const listState = (initialState) => initialState.list

export const reducers = combineReducers({
    list: listReducer
})
export const rootReducer = (state, action) => { return reducers(state, action)}
export const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => { console.log('NEW STATE===>', store.getState())})