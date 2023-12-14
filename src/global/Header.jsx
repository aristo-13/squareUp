import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between items-center bg-[#262626] py-5 px-[162px] border-b border-gray-700'>
      <div className='w-[177px] h-[60px]'>
         <img src={logo} alt="" className='w-full h-full'/>
      </div>
      <div className='w-[537px] h-[55px] flex items-center justify-center gap-[30px] text-white'>
        <NavLink className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Home</NavLink>
        <NavLink className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Services</NavLink>
        <NavLink className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Work</NavLink>
        <NavLink className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Process</NavLink>
        <NavLink className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>About</NavLink>
        <NavLink className='h-full rounded-lg px-3 py-1 flex justify-center items-center hover:bg-white/5'>Careers</NavLink>
      </div>
      <button className='w-[135px] h-[59px] rounded-lg py-4 px-6 bg-[#9EFF00] whitespace-nowrap'>Contact Us</button>
    </div>
  )
}

export default Header
