import React, { useState } from 'react'
import plus from '../assets/plus.svg'
import times from '../assets/times.svg'

function Accordion({num}) {
   const [Open,setOpen] = useState(false)


  return (
    <details open={Open} className='text-white px-1 md:px-[34px] py-[50px] block border-t border-x border-white/5 ' onClick={()=>setOpen(!Open)}>
        <summary className='list-none w-full flex justify-between items-center' onClick={()=>setOpen(!Open)}>
            <div className={(Open? "text-[#9eff00] ": "text-white " )+ "flex items-center gap-2"}>
                <span className='p-2 md:p-4 py-2 rounded-xl border border-[#2e2e2e] text-lg md:text-[24px] text-center font-semibold bg-[#242424]'>
                    {num}
                </span>
                <p className='text-[14px] md:text-[18px]'>What services does SquareUp provide?</p> 
            </div>
            <button className=''>{Open? <img src={times}/> : <img src={plus}/>}</button>
        </summary>

        <p className='p-1 md:px-16'>
           SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
        </p>
    </details>
  )
}

export default Accordion
