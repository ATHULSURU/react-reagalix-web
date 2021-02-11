import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { localState } from '../store/localStorage/localData'

import GoogleLogIn from './GoogleLogIn'
import Home from './Home'
import Registration from './Registration'

const AuthRoute = (props) => {
  const { isAuthUser, type, path } = props

  if (type === 'guest' && !isAuthUser)
    return <Route to='registration' component={Registration} />
  else if (type === 'private' && !isAuthUser) return <GoogleLogIn />
  else if (type === 'private' && isAuthUser && path === '/login') {
    return <Home />
  }
  return <Route {...props} />
}

/*
I want to use <Redirect to='/registration'/> insted of <Registration />
same for <GoogleLogIn />
*/

const mapStateToProps = (state) => {
  return {
    isAuthUser: state.userGmailData.isAuthUser,
  }
}

export default connect(mapStateToProps)(AuthRoute)
