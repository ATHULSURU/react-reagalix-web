import React from 'react'
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import icon from '../assets/images/Regalix-Logo.png'
import '../App.css'

const GoogleLogIn = (props) => {
  return (
    <div className='google-login-container'>
      <div className='icon-image-container'>
        <img src={icon} className='icon-image' alt='icon'></img>
      </div>
      <div className='google-login-button'>
        <GoogleLogin
          clientId='1084759828057-i1r3rnaihvrvf893v7sqph5qcvcd6qe7.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={(data) => props.responseGoogle('SUCCESS', data)}
          onFailure={(data) => props.responseGoogle('FAILED', data)}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <div>
        <NavLink to='/registration' style={{ fontWeight: 'bolder' }}>
          Sign Up
        </NavLink>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    responseGoogle: (e, data) => dispatch({ type: e, value: data }),
  }
}

export default connect(null, mapDispatchToProps)(GoogleLogIn)
