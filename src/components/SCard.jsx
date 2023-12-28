import React from 'react'

function SCard({icon}) {
  return (
    <div className='p-[30px] flex flex-col items-start border border-white/5 gap-4'>
       <button className='p-2 border rounded-[12px] border-white/5 bg-[#9dff000a] '><img src={icon} alt="" className='w-[25px]'/></button>
       <p className='text-sm lg:text-[16px] font-medium text-[#e6e6e6]'>User Research and Persona Development</p>
    </div>
  )
}

export default SCard
