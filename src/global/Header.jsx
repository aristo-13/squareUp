import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import hamburger from '../assets/hamburger.svg'

function Header() {
  return (
    <div className='flex justify-between items-center bg-[#262626] px-[14px] py-[35px] md:py-5 lg:px-[140px] border-b border-gray-700'>
      <div className='w-[177px] h-[60px]'>
         <img src={logo} alt="" className='w-full h-full'/>
      </div>
      <div className='hidden h-[55px] lg:flex items-center justify-center gap-[30px] text-white'>
        <NavLink to='/' className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Home</NavLink>
        <NavLink to='services' className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Services</NavLink>
        <NavLink to="work" className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Work</NavLink>
        <NavLink to="process" className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Process</NavLink>
        <NavLink to="about" className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>About</NavLink>
        <NavLink to="careers" className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Careers</NavLink>
      </div>
      <button className='hidden lg:block w-[135px] h-[59px] rounded-lg py-4 px-6 bg-[#9EFF00] whitespace-nowrap'>Contact Us</button>
      <button className='p-1 rounded-md bg-[#3e3e3e] lg:hidden'><img src={hamburger} alt="" /></button>
    </div>
  )
}

export default Header
