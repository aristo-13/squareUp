import React from 'react'
import logo from '../assets/logo.svg'
import icon from '../assets/t.svg'
import icon1 from '../assets/f.svg'
import icon2 from '../assets/r.svg'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='py-[50px] px-4 md:px-[120px] border-t border-gray-700 flex flex-col gap-[50px]'>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-0">
        <div className='w-[177px] h-[60px]'>
            <img src={logo} alt="" className='w-full h-full'/>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 text-white'>
            <NavLink className='flex justify-center items-center'>Home</NavLink>
            <NavLink className='flex justify-center items-center'>Services</NavLink>
            <NavLink className='flex justify-center items-center'>Work</NavLink>
            <NavLink className='flex justify-center items-center'>Process</NavLink>
            <NavLink className='flex justify-center items-center'>About</NavLink>
            <NavLink className='flex justify-center items-center'>Careers</NavLink>
        </div>
        <div className="flex flex-col lg:flex-row p-4 md:p-[14px] gap-4 text-white items-center border rounded-xl border-gray-700/50">
            <p className='whitespace-nowrap'>Stay Connected</p>
            <div className='flex gap-4'>
              <button className='p-1 md:p-4 rounded-xl border-x border-t bg-white/5 border-gray-700/50'><img src={icon} alt="" /></button>
              <button className='p-1 md:p-4 rounded-xl border-x border-t bg-white/5 border-gray-700/50'><img src={icon1} alt="" /></button>
              <button className='p-1 md:p-4 rounded-xl border-x border-t bg-white/5 border-gray-700/50'><img src={icon2} alt="" /></button>
            </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-700"></div>
      <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-4">
            <p className='border-b border-gray-700 pb-4'>hello@squareup.com</p>
            <p className='border-b border-gray-700 pb-4'>+233 544522229</p>
            <p className='border-b border-gray-700 pb-4'>somewhere in the world</p>
        </div>
         
        <p className='text-[#98989A] text-center text-[18px] font-normal'>&copy; SquareUp.All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
