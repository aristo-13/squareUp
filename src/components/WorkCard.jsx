import React from 'react'
import visitIcon from '../assets/visitIcon.svg'

function WorkCard({img,headText,Header}) {
  return (
    <div className='flex flex-col pb-20 items-start border border-white/5'>
      <p className='px-5 md:px-10 py-5 border-y border-white/5 text-[#98989a] text-xl font-medium'>{Header}</p>
      <div className="flex flex-col gap-5 items-start px-3 lg:px-10">
         
          <div className='w-full md:h-[300px] rounded-xl overflow-hidden'>
             <img src={img} alt="" className="w-full h-full" />
          </div>
         <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col items-start gap-2'>
                <h1 className='text-base sm:text-lg font-medium text-[#e6e6e6]'>{headText}</h1>
                <span className='text-center rounded-lg bg-white/5 text-[#98989a] font-normal p-1 md:px-2 md:py-1'>htttps:/www.hungrybites.com</span>
            </div>
            <button className='rounded-lg p-1 md:p-2 bg-white/5'><img src={visitIcon} alt="" /></button>
         </div>

         <p className='text-sm font-normal text-[#98989a]'>
             {headText} required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.
         </p>
      </div>
    </div>
  )
}

export default WorkCard
