import React from 'react'

function StoryCard({num,head}) {
  return (
    <div className='px-4 md:px-[30px] py-[60px] flex flex-col gap-[30px] border border-white/5'>
      <div className='flex gap-2 items-center text-[#d8ff99]'>
        <h1 className=' font-semibold text-5xl md:text-7xl'>{num? num : ""}</h1>
        <p className='text-lg font-semibold pl-2 md:pb-4 border-b border-white/5 grow'>{head}</p>
      </div>
      <p className='text-sm font-normal text-[#98989a] '>
         SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.
      </p>
    </div>
  )
}

export default StoryCard
