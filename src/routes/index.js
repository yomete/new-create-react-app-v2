import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Loadable from 'react-loadable'

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const LoaderComponent = () => {
  return (
    <>
      <div className="container">
        <p>Loading</p>
      </div>
    </>
  )
}

const AsyncHome = Loadable({
    loader: () => import('../components/Home'),
    loading: LoaderComponent
})
const AsyncAbout = Loadable({
    loader: () => import('../components/About'),
    loading: LoaderComponent,
    delay: 5000
})
const AsyncContact = Loadable({
  loader: () => import('../components/Contact'),
  loading: LoaderComponent,
  delay: 5000
})
const AsyncNotFound = Loadable({
    loader: () => import('../components/NotFound'),
    loading: LoaderComponent
})


class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <div>
                    <header className="header container">
                        <nav className="navbar">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Home</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                <Link to="/about">
                                    <span className="navbar-item">About</span>
                                </Link>

                                <Link to="/contact">
                                    <span className="navbar-item">Contact</span>
                                </Link>

                                <Link to="/somepage">
                                    <span className="navbar-item">404 Page</span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path="/" component={AsyncHome} />
                        <Route path="/about" component={AsyncAbout}/>
                        <Route path="/contact" component={AsyncContact}/>
                        <Route path="*" component={AsyncNotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes