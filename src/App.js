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
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route path="/" component={AddForm} />
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  )
}

export default App
