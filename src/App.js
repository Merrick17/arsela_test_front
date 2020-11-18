import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import './assets/css/bootstrap.css'
import AddForm from './screens/AddForm'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import SubmitForm from './screens/SubmitForm'
import DisplayData from './screens/DisplayData'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/display" component={DisplayData} />
              <Route path="/submit" component={SubmitForm} />
              <Route path="/" component={AddForm} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  )
}

export default App
