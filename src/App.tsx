import * as React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import AboutPage from './pages/about'
import NavBar from './components/navbar'
import * as history from 'history'

export default function App() {
  return (
    <Router history={history.createBrowserHistory()}>
      <NavBar />
      <Switch>
        <Route exact path={'/'}>
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  )
}
