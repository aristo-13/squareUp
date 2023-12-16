import React from 'react'
import modal from '../assets/modal.svg'
import Companies from '../components/companies';

function Home() {
      return (
        <div className='w-full'>
          <div className='w-full p-2 relative'>
            <div className='mx-auto full h-[80vh] flex justify-center items-end'>
              <img src={modal} alt="" className='w-full'/>
            </div>

            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[50px] justify-center items-center'>
                <h1 className='font-semibold text-[48px] text-center text-white'>A Dgital Product Product Studio that will Work</h1>
                <div className="border border-gray-700 bg-[#262626]/20 backdrop-blur rounded-md">
                  <p className='flex items-center gap-1 px-[40px] py-[24px] text-gray-500'>
                    For <span className='px-[14px] whitespace-nowrap py-[12px] bg-gray-700/30 text-white rounded-lg'>Startups</span> , <span className='px-[14px] whitespace-nowrap py-[12px] bg-gray-700/30  text-white rounded-lg'>Enterprise leaders</span>, <span className='px-[14px] whitespace-nowrap py-[12px] bg-gray-700/30  text-white rounded-lg'>Media Publishers</span> and <span className='px-[14px] whitespace-nowrap py-[12px] bg-gray-700/30  text-white rounded-lg'>Social Good</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className='rounded-[10px]  border border-gray-700 px-[28px] py-[18px] text-white bg-[#333333]/60 backdrop-blur'>Our Works</button>
                  <button className='rounded-[10px]  border border-gray-700 px-[28px] py-[18px] text-gray-700 bg-[#9EFF00]'>Contact Us</button>
                </div>
            </div>
          </div>
          <Companies />
        </div>
      );
}

export default Home
