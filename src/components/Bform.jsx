import React, { useState } from 'react'
import Checkbox from './Checkbox'

function Bform() {
    
  return (
    <form className='p-4 lg:p-[60px] border border-white/5 flex flex-col items-center gap-5 md:gap-[40px]'>
      <div className="w-full flex flex-wrap items-center gap-2 md:gap-[50px]">
         <div className='flex-1 flex flex-col px-[30px] py-[20px] rounded-lg border border-[#262626] bg-[#333333]'>
            <label htmlFor="fullname" className='text-lg font-medium text-white'>Full Name</label>
            <input className='bg-transparent w-full border-b border-white/5 py-2 text-sm outline-none text-[#656567]' type="text" placeholder='Type here'/>
         </div>
         <div className='flex-1 flex flex-col px-[30px] py-[20px] rounded-lg border border-[#262626] bg-[#333333]'>
            <label htmlFor="fullname" className='text-lg font-medium text-white'>Email</label>
            <input className='bg-transparent w-full border-b border-white/5 py-2 text-sm outline-none text-[#656567]' type="text" placeholder='Type here'/>
         </div>
      </div>
      <div className="flex flex-col p-4 md:p-8 gap-[40px] rounded-xl border-[#262626] bg-[#333333] w-full">
        <h2 className='text-white font-medium text-lg'>Why are you contacting us?</h2>
        <div className='grid md:grid-cols-2 gap-1'>
            <Checkbox title="Web Design"/>
            <Checkbox title="Collaboration"/>
            <Checkbox title="Mobile App Design"/>
            <Checkbox title="Others"/>
        </div>
      </div>
      <div className="w-full border border-[#262626] bg-[#333333] flex flex-col gap-[30px] rounded-xl p-5 md:p-10">
        <h2 className='text-[18px] font-medium text-white'>Your Budget</h2>
        <p className='font-normal text-sm text-[#e6e6e6]'>Slide to indicate your budget range</p>

        <input type="range" name="" id="" className=' appearance-none h-[3px] rounded-full bg-[#9eff00]'/>
      </div>
      <div className='w-full flex flex-col px-[30px] py-[20px] rounded-lg border border-[#262626] bg-[#333333]'>
            <label htmlFor="fullname" className='text-lg font-medium text-white'>Your Message</label>
            <input className='bg-transparent w-full border-b border-white/5 py-2 text-sm outline-none text-[#656567]' type="text" placeholder='Type here'/>
    </div>

      <button className='px-10 py-4 rounded-lg bg-[#9eff00]' type='submit'>Submit</button>
    </form>
  )
}

export default Bform
