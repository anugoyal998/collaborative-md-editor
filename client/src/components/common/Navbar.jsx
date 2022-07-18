import React from 'react'
import logo from '../../img/logo.png'
import LoginBtn from '../buttons/LoginBtn'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img className="w-28" src={logo} alt="logo" />
      <LoginBtn/>
    </div>
  )
}

export default Navbar
