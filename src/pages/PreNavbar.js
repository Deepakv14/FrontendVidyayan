import React from 'react'
import '../styles/PreNavbar.css'

const PreNavbar = () => {
  return (
   <div className="preNav">
        <div>
        <a href="" className="big">RoyalUI</a><span>|</span>
        <a href="">HOME</a><span>|</span>
        <a href="">ABOUT</a>
        <input type="text" placeholder='Search' />
    </div>
    <div>
        <a href="">SIGN-OUT</a><span>|</span>
        <a href="">ACCOUNT</a>
    </div>
   </div>
  )
}

export default PreNavbar