import React from 'react'
import fourNotFour from '../assets/images/broken-img-2.png'

function UrlNotFound(props) {
  return (
    <div className='urlNotFound'>
      <img src={fourNotFour}></img>
      The page You are looking Not found.Please check your URL
    </div>
  )
}

export default UrlNotFound
