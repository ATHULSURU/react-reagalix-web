import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'
import GoogleLogIn from './components/GoogleLogIn'
import Home from './components/Home'
import Registration from './components/Registration'
import NavbarPage from './components/NavbarPage'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import UrlNotFound from './components/UrlNotFound'
import AuthRoute from './components/AuthRoute'
import Demo from './components/Demo'

const App = (props) => {
  return (
    <Router>
      <NavbarPage />
      <Switch>
        <AuthRoute path='/' type='private' exact strict>
          <Home />
        </AuthRoute>
        <AuthRoute path='/login' type='private' exact strict>
          <GoogleLogIn />
        </AuthRoute>
        <AuthRoute path='/registration' type='guest' exact strict>
          <Registration />
        </AuthRoute>
        <AuthRoute path='/demo' type='private' exact strict>
          <Demo />
        </AuthRoute>
        <AuthRoute path='/products' type='private' exact strict>
          <Products />
        </AuthRoute>
        <AuthRoute path='/product-details/:id' type='private' exact strict>
          <ProductDetails />
        </AuthRoute>
        <Route path='*' type='private' exact strict>
          <UrlNotFound />
        </Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    logIn: state.userGmailData.logIn,
    userData: state.userGmailData.userData,
  }
}

export default connect(mapStateToProps, null)(App)
