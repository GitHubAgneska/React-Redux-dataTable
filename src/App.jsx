import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/layout/Header/Header'
import Employees from './components/containers/Employees';
import { GlobalStyle } from './style/global_style'


const App = () => {

    return (
        <div className="App">
            <GlobalStyle />
                <div className="container">
                    <Router>
                        <Header />
                        <Fragment>
                            <Switch>
                                <Route exact path="/"  render={() => <Redirect to="/create-employee" />} />
                                <Route exact path="/employees-list" component={Employees} />
                            </Switch>
                        </Fragment>
                    </Router>
            </div>
        </div>
    )
}
export default App
