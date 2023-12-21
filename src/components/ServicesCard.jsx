import React from 'react'

function ServicesCard({icon,header,text}) {
  return (
    <div className='flex-1 flex flex-col items-center gap-10 p-5 md:p-10 border-x border-gray-700/20'>
       <div className='p-3 rounded-xl border-x border-t bg-white/5 border-gray-700/50 self-start'><img src={icon} alt="" /></div>
       <h1 className='font-semibold text-xl text-white self-start'>{header}</h1>
       <p className='text-sm font-normal text-[#E6E6E6]'>{text}</p>
    </div>
  )
}

export default ServicesCard
