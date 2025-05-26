import React from 'react'
import Header from '../../components/Header/Header'
import Footer from "../../components/footer/Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
          <Header/>
          <main className='min-h-70vh'>
          <Outlet/>
          </main>
          <Footer/>
    </div>
  )
}

export default Layout