import {initialState } from '../store'
import produce from 'immer'
import { LIST_FETCHING, LIST_RESOLVED, LIST_REJECTED } from '../actions/actions-types'

// ......................................................
// EMPLOYEES LIST  REDUCER
// ......................................................
export default function listReducer(state = initialState.list, action) {

    return produce(state, (draft) => {
        switch (action.type) {
            
            case LIST_FETCHING: {
                if ( draft.get_status === 'void') {
                    draft.get_status = 'pending'
                    return
                }
                if (draft.get_status === 'rejected') {
                    draft.get_error = null
                    draft.get_status = 'pending'
                    return
                }
                if ( draft.get_status === 'resolved') {
                    draft.get_status = 'updating' // ongoing request but presence of data
                    return
                }
                console.log(' 1 - LIST_FETCHING => status===', draft.get_status )
                return // else action ignored
            }

            case LIST_RESOLVED: {
                if ( draft.get_status === 'pending' || draft.get_status === 'updating') {
                    draft.get_status = 'resolved'
                    draft.get_payload = action.payload.employees
                    draft.originalList = [...draft.originalList, ...draft.get_payload]
                    // console.log('PAYLOAD TYPE==', typeof(action.payload))
                    return 
                }
                console.log('2 - LIST_RESOLVED => PAYLOAD DONE'  )
                return // else action ignored
            }

            case LIST_REJECTED: {
                if ( draft.get_status === 'pending' || draft.get_status === 'updating') {
                    // set to rejected, save error, delete data
                    draft.get_status = 'rejected'
                    draft.get_error = action.payload
                    draft.get_payload = null
                    return 
                }
                return // else action ignored
            }
            default: return
        }
    })
}