import React from 'react'

function FeedbackCard() {
  return (
    <div className='flex flex-col gap-8 px-20 py-14 border border-white/5'>
       <h2 className='text-[#deff99] text-lg font-medium'>SquareUp has been Instrumental in Transforming our Online Presence. </h2>
       <p className='text-sm font-normal text-[#e6e6e6]'>Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.</p>

       <div className="flex p-4 items-center gap-2 rounded-lg border border-[#262626] bg-[rgba(140,136,136,0.06)] justify-between">
          <div className='flex gap-3 items-center'>
            <div className='w-[50px] h-[50px] rounded-lg bg-green-500/20'>

            </div>
            <div className='flex flex-col items-center gap-[2px]'>
                <h2 className='text-lg font-medium text-white self-start'>Mark Thompson</h2>
                <p className='text-[#e6e6e6] text-sm font-normal'>CEO of EventMasters</p>
            </div>
          </div>
          <button className='px-[14px] py-[16px] text-white rounded-lg bg-[#262626]'>Open Website</button>
       </div>  
    </div>
  )
}

export default FeedbackCard
