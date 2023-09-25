import React from 'react'
import Logo from '../assets/logo.png'
import './style/Nav.scss'

const Nav = () => {
  return (
    <div className='nav'>

        <img src={Logo} alt="logo" />

        <a href="#"> GET A FRENICHIES</a>

    </div>
  )
}

export default Nav