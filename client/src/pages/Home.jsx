import React from 'react'
import { useParams } from 'react-router-dom'
import HomeNavbar from '../components/common/HomeNavbar'

const Home = () => {
  const { username } = useParams()
  return (
    <div className="bg-black text-white pt-4 px-8 w-screen h-screen">
      <HomeNavbar username={username} />
      <hr className="mt-3 border-[#444]"/>
    </div>
  )
}

export default Home
