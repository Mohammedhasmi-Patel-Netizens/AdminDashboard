import React from 'react'
import Footer from '../pages/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import SideBar from '../pages/SideBar'

const Layout = () => {
  return (
    <div>
      <Header/>
      <SideBar/>
            {
                // here i need to dynamic values based on routes so definately here use concept about outlet.
            }
            <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
