import React from 'react'
import llogo from '../assets/llogo.svg'


function SquareUpVit() {
  return (
    <div className='p-4 md:p-10 flex flex-col gap-8'>
            <div className="flex flex-col text-center md:text-start gap-3 md:flex-row md:gap-6 items-center">
                <img src={llogo} alt="" />
                <div className='text-[#98989a]'>
                    <h1 className='text-xl font-medium'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h1>
                    <p className='text-sm font-normal'>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between px-[20px] py-[12px] rounded-[10px] backdrop-blur-[6px] bg-[#1a1a1a] border border-white/5">
                <p className='text-sm flex flex-col lg:flex-row text-center items-center gap-2 text-[#98989a] font-normal'>Welcome to SquareUp <span className='p-2 bg-[#262626] rounded-[6px]'>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</span></p>

                <button className='px-[18px] py-3 rounded-lg bg-[#9eff00] text-base whitespace-nowrap'>Start Project</button>
            </div>
      </div>
  )
}

export default SquareUpVit
