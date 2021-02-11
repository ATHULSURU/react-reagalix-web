import React, { useEffect, useState } from 'react'
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact'
import { localState } from '../store/localStorage/localData'
import GoogleLogIn from './GoogleLogIn'
import { Redirect } from 'react-router-dom'

const Home = () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '128a393fd3msh8e67034f92db991p170aabjsn9cb3ec1e2fc0',
      'x-rapidapi-host': 'jikan1.p.rapidapi.com',
      useQueryString: true,
    },
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://jikan1.p.rapidapi.com/top/anime/1/upcoming`,
          requestOptions
        )
        const body = await result.json()
        debugger
      } catch (err) {
        // error handling code
      }
    }

    // call the async fetchData function
    fetchData()
  }, [])

  return (
    <div>
      <header>
        <MDBView src='https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg'>
          <MDBMask
            overlay='black-light'
            className='flex-center flex-column text-white text-center'
          >
            <h2 style={{ fontWeight: 'bolder' }}>Regalix</h2>
            <h5>
              It will always stay visible on the top, even when you scroll down
            </h5>
            <br />
            <p>
              Full page intro with background image will be always displayed in
              full screen mode, regardless of device{' '}
            </p>
          </MDBMask>
        </MDBView>
      </header>

      <main>
        <MDBContainer className='text-center my-5'>
          <p align='justify'>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </MDBContainer>
      </main>
    </div>
  )
}

export default Home
