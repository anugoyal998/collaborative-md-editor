import React from 'react'
import logo from '../../img/logo.png'
import MdEditorBtn from '../buttons/MdEditorBtn'
import ProfileBtn from '../buttons/ProfileBtn'

const HomeNavbar = ({ username }) => {
  return (
    <div className="flex justify-between items-center">
      <img className="w-28" src={logo} alt="logo" />
      <div className="flex space-x-4 items-center">
        <MdEditorBtn />
        <ProfileBtn username={username} />
      </div>
    </div>
  )
}

export default HomeNavbar
