import React from 'react'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdbreact'

import icon from '../assets/images/Regalix-Logo.png'
import { connect } from 'react-redux'

const NavbarPage = (props) => {
  if (props.isAuthUser) {
    return (
      <React.Fragment>
        <MDBNavbar color='indigo' dark expand='md'>
          <MDBNavbarBrand>
            <img src={icon} style={{ width: '100px' }} alt=''></img>
          </MDBNavbarBrand>
          <MDBNavbarToggler />
          <MDBCollapse id='navbarCollapse3' navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to='/'>Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/products'>Products</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/registration'>Registration</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/demo'>Demo</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon='user' />
                </MDBDropdownToggle>
                <MDBDropdownMenu right>
                  <MDBDropdownItem>{props.userName}</MDBDropdownItem>
                  <MDBDropdownItem onClick={(e) => props.logOut('LOG_OUT', e)}>
                    Log out
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </React.Fragment>
    )
  } else return null
}

const mapStateToProps = (state) => {
  return {
    isAuthUser: state.userGmailData.isAuthUser,
    userName: state.userGmailData.userName,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (e, data) => dispatch({ type: e, value: data }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarPage)
