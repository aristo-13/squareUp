import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import hamburger from '../assets/hamburger.svg'
import times from '../assets/times.svg'
import {FaCogs, FaHome, FaPersonBooth, FaQuestionCircle, FaServer, FaStepForward} from 'react-icons/fa'

function Header() {
const [sideNav,setSideNav] = useState(false)


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
      <button onClick={()=> setSideNav(true)} className='p-1 rounded-md bg-[#3e3e3e] lg:hidden'><img src={hamburger} alt="" /></button>


      <div className="fixed w-full h-screen top-0 -right-full bg-[#262626] duration-300 p-6 flex flex-col gap-5 overflow-hidden z-40" style={{right: sideNav? "0" : "-100%"}}>
        
       <div className='flex justify-between items-center'>
        <div className='w-[150px] h-[50px]'>
              <img src={logo} alt="" className='w-full h-full'/>
          </div>

          <button onClick={()=>setSideNav(!sideNav)} className='p-1 rounded-md bg-[#3e3e3e] lg:hidden'><img src={times} alt="" /></button>
       </div>


       <div className='flex flex-col gap-8 p-4'>
        <NavLink onClick={()=>setSideNav(!sideNav)} to='/' className='flex items-center gap-4 text-white border p-4 rounded-lg bg-white/5 border-white/20 hover:bg-black/10'>
          <span><FaHome /></span>
          Home
        </NavLink>
        <NavLink onClick={()=>setSideNav(!sideNav)} to='services' className='flex items-center gap-4 text-white border p-4 rounded-lg bg-white/5 border-white/20 hover:bg-black/10'>
          <span><FaServer /></span>
          Services
        </NavLink>
        <NavLink onClick={()=>setSideNav(!sideNav)} to="work" className='flex items-center gap-4 text-white border p-4 rounded-lg bg-white/5 border-white/20 hover:bg-black/10'>
          <span><FaCogs /></span>
          Work
        </NavLink>
        <NavLink onClick={()=>setSideNav(!sideNav)} to="process" className='flex items-center gap-4 text-white border p-4 rounded-lg bg-white/5 border-white/20 hover:bg-black/10'>
          <span><FaStepForward /></span>
          Process
        </NavLink>
        <NavLink onClick={()=>setSideNav(!sideNav)} to="about" className='flex items-center gap-4 text-white border p-4 rounded-lg bg-white/5 border-white/20 hover:bg-black/10'>
          <span><FaQuestionCircle /></span>
          About
        </NavLink>
        <NavLink onClick={()=>setSideNav(!sideNav)} to="careers" className='flex items-center gap-4 text-white border p-4 rounded-lg bg-white/5 border-white/20 hover:bg-black/10'>
          <span><FaPersonBooth /></span>
          Careers
        </NavLink>
      </div>
            
        </div>
    </div>
  )
}

export default Header
