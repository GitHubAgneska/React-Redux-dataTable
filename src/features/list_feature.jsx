import { listState, initialState } from '../state/store'
import { 
    listFetching, listResolved, listRejected,
    setCollection,
    setEntriesPerPage, setTotalPages,
    setCollectionAsPages

} from '../state/actions/Actions'
import { client } from '../api/client'

export const selectAllList = initialState => initialState.list.data
export const selectCollectionAsPages =  initialState => initialState.list.collectionAsPages

// ......................................................
// FETCH
// ......................................................
export async function fetchList(dispatch, getState) { // rtk = createAsyncThunk
    
    const status = listState(getState()).get_status
    if ( status === 'pending' || status === 'loading' ) { return }
    
    dispatch(listFetching())

    try {
        const response = await client.get('/fakeApi/list')
        const data = await response
        dispatch(listResolved(data))
        dispatch(setCollection(data))   // set default collection to all list
        dispatch(changeEntriesAmount(10)) 
    }
    catch (error) {
        dispatch(listRejected(error))
    }
}
// ......................................................
// SET UP PAGINATION : thunks dispatching multiple pagination actions
// ......................................................
export const setPage = (pageNumber) => (dispatch, getState) => { 
    dispatch(setCurrentActivePageIndex(pageNumber))
    dispatch(setCurrentActivePage(pageNumber))
}

export const changeEntriesAmount = (entries) => (dispatch, getState) => { 
    
    dispatch(setEntriesPerPage(entries))

    const currentList =  listState(getState()).collection
    // console.log('SLICE FILTERING RESULTS =========>', currentList)

    let outputPages = []
    let from = 0
    let totalPages = currentList.length
    
    if ( !totalPages) { 
        totalPages = Math.ceil(currentList.length / entries)
        dispatch(setTotalPages(totalPages))
    }

    // setup pages arrays
    for (let i = from; i <= totalPages; i++ ) {
        let newPageArray = []
        let to = from + entries
        newPageArray.push(currentList.slice(from, to ))
        outputPages.push(newPageArray)
        from += entries
    }
    
    dispatch(setCollectionAsPages(outputPages))
}