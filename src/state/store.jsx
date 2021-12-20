import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import listReducer from './reducers/list-reducer'

export const initialState = {
    list: {
        status: 'idle' | 'loading' | 'resolved' | 'rejected',
        data: null,
        error: null,

        collection: null,
        sorted: false,
        sortedBy: { sortParam: '', reverse: false },
        searchedBy: false,
        searchTerm: '',

        collectionAsPages: null,
        entries: 10,
        currentPage: null,
        currentPageIndex: 0
    }
}

// SELECTORS
export const listState = (initialState) => initialState.list

export const reducers = combineReducers({
    list: listReducer
})

export const rootReducer = (state, action) => { return reducers(state, action)}

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(rootReducer, compose(applyMiddleware(thunk),reduxDevtools));

store.subscribe(() => { console.log('NEW STATE===>', store.getState())})