import { 
    LIST_FETCHING, LIST_RESOLVED, LIST_REJECTED,
    SETUP_COLLECTION,
    SET_ENTRIES_AMOUNT, SET_TOTAL_PAGES,
    SET_CURRENT_PAGE_INDEX, SET_CURRENT_ACTIVE_PAGE,

    SETUP_COLLECTION_AS_PAGES

} from './actions-types'

// ................................................................................. 
// ACTIONS CREATORS : LIST 
// ................................................................................. 
// LIST - FETCH actions...................................................
export const ListFetching = () => (dispatch) => (dispatch({type: LIST_FETCHING }))
export const listResolved = (data) => (dispatch) => (dispatch({type: LIST_RESOLVED, payload: data}))
export const ListRejected = (error) => (dispatch) => (dispatch({type: LIST_REJECTED, payload: error}))

export const setCollection = (data) => (dispatch) => (dispatch({type: SETUP_COLLECTION, payload: data }))

// LIST - PAGINATE actions...............................................
export const setUpCollectionAsPages = (pages) => ({type: SETUP_COLLECTION_AS_PAGES, payload: pages})
export const setEntriesPerPage = (entries) => ({type: SET_ENTRIES_AMOUNT, payload: entries })
export const setTotalPages = (n) => ({type: SET_TOTAL_PAGES, payload: n})
export const setCurrentActivePageIndex = (i) => ({ type: SET_CURRENT_PAGE_INDEX, payload: i })
export const setCurrentActivePage = (page) => ({ type: SET_CURRENT_ACTIVE_PAGE, payload: page })

// LIST - SORT actions...................................................
// LIST - SEARCH actions.................................................