import React, {Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { GlobalStyle } from './style/global_style'
import DataTable from './containers/DataTable/DataTable';

import { fetchList } from './features/list_feature'

const App = () => {

    const dispatch = useDispatch()
    const listStatus = useSelector(initialState => initialState.list.status)
    const pages = useSelector(initialState => initialState.list.collectionAsPages)

    useEffect(()=> {
        if (listStatus !== 'resolved') dispatch(fetchList)
    }, [dispatch, listStatus])

    // wait for pagination to be set (depends on initial fetch resolving)
    let proceed = false;
    if ( listStatus === 'pending' || listStatus === 'updating' ) { return 'loading' }
    else if ( listStatus === 'resolved') { pages?.length > 0 ? proceed=true:proceed=false; }


    return (
        <div className="App">
            <GlobalStyle />
                <div className="container">
                    <Router>
                      {/*   <Header /> */}
                        <Fragment>
                            <Switch>
                            { proceed ?
                                <Route exact path="/employees-list" component={DataTable} />
                                :'loading...'
                                }
                            </Switch>
                        </Fragment>
                    </Router>
            </div>
        </div>
    )
}
export default App
