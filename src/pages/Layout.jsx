import React from 'react'
import Header from '../global/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../global/Footer'

function Layout() {
  return (
    <div className=' min-h-screen bg-[#262626]'>
      <Header />
      <main className='w-[95vw] mx-auto border-x border-gray-700'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
