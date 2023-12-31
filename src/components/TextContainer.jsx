import React from 'react'
import textContainerbg from '../assets/textContainerbg.svg'

function TextContainer({Header,subText}) {
  return (
    <div className='w-full px-1 md:px-[200px] py-[100px] flex flex-col gap-[14px] justify-center items-center border-t border-gray-700 bg-slate-400/5' style={{backgroundImage: `url(${textContainerbg})`}}>
       <h1 className='font-semibold text-center text-2xl md:text-4xl text-white'>{Header}</h1>
       <p className='font-normal text-[12px] md:text-sm text-[#E6E6E6] text-center'>{subText}</p>
    </div>
  )
}

export default TextContainer
