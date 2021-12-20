import {initialState } from '../store'
import produce from 'immer'
import { 
    LIST_FETCHING, LIST_RESOLVED, LIST_REJECTED,
    SETUP_COLLECTION,
    SET_ENTRIES_AMOUNT, SET_CURRENT_ACTIVE_PAGE, SET_CURRENT_PAGE_INDEX,
    SETUP_COLLECTION_AS_PAGES,
} from '../actions/actions-types'

// ......................................................
// EMPLOYEES LIST  REDUCER
// ......................................................
export default function listReducer(state = initialState.list, action) {

    return produce(state, (draft) => {
        switch (action.type) {
            // FETCH ACTIONS
            case LIST_FETCHING: {
                if ( draft.status === 'idle') {
                    draft.status = 'loading'
                    return
                }
                if (draft.status === 'rejected') {
                    draft.error = null
                    draft.status = 'loading'
                    return
                }
                if ( draft.status === 'resolved') {
                    draft.status = 'updating' // ongoing request but presence of data
                    return
                }
                console.log(' 1 - LIST_FETCHING => status===', draft.status )
                return // else action ignored
            }
            case LIST_RESOLVED: {
                if ( draft.status === 'loading' || draft.status === 'updating') {
                    draft.status = 'resolved'
                    draft.data = action.payload.employees
                    if ( !draft.collection ) { draft.collection = action.payload.employees }
                    return 
                }
                console.log('2 - LIST_RESOLVED => PAYLOAD DONE'  )
                return // else action ignored
            }
            case LIST_REJECTED: {
                if ( draft.status === 'loading' || draft.status === 'updating') {
                    // set to rejected, save error, delete data
                    draft.status = 'rejected'
                    draft.error = action.payload
                    draft.payload = null
                    return 
                }
                return // else action ignored
            }
            // CURRENT COLLECTION ( all results/ sorted /searched )
            case SETUP_COLLECTION: {
                if (draft.collection) { draft.collection = null } // reset collection
                draft.collection = action.payload
                return
            }
            
            // PAGINATE ACTIONS (NOT ASYNC)
            case SET_ENTRIES_AMOUNT: {
                let newAmount = action.payload;
                return { ...state, entries: newAmount }
            }
            case SETUP_COLLECTION_AS_PAGES: {
                let pages = action.payload
                console.log('4 - PAGINATION REDUCER ==> - SET_RESULTS_AS_PAGES ==> NOW'  )
                return { ...state, collectionAsPages: pages }
            }
            case SET_CURRENT_ACTIVE_PAGE: {
                let requestedIndex = action.payload
                return { ...state, currentPage: state.collectionAsPages[requestedIndex-1] }
            }
            case SET_CURRENT_PAGE_INDEX: {
                let pageRequested = action.payload
                return { ...state, currentPageIndex: pageRequested-1  }
            }

            // SORT ACTIONS

            // SEARCH ACTIONS





            default: return
        }
    })
}