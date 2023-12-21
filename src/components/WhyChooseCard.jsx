import React from 'react'

function WhyChooseCard({icon,header,text}) {
  return (
    <div className='flex p-8 md:p-20 flex-col gap-5 border border-gray-700/20'>
       <div className='flex gap-4 items-center'>
         <div className='p-4 rounded-[10px] border border-[#2E2E2E] bg-white/5'><img src={icon} alt="" /></div>
         <h1 className='text-lg font-medium text-white'>{header}</h1>
       </div>
       <p className='font-normal text-sm text-[#E6E6E6]'>{text}</p>
    </div>
  )
}

export default WhyChooseCard
