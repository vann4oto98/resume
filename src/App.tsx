import * as React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import HomePage from './pages/home'
import NavBar from './components/navbar'
import * as history from 'history'

export default function App() {
  return (
    <Router history={history.createBrowserHistory()}>
      <NavBar />
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}
