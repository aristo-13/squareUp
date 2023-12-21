import React, { useState } from 'react'
import check from '../assets/check.svg'


function Checkbox({title}) {
  const [checked,setChecked] = useState(false)

  return (
    <span className='flex gap-2 items-center cursor-pointer' onClick={()=>setChecked(!checked)}>
        <span className='relative rounded-[4px] w-[20px] h-[20px] border border-[#333] bg-[#262626]'>
            {checked && <img src={check} alt="" className='cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>}
            <input checked={checked} className='w-full h-full appearance-none' type="checkbox" id={title.substring(0,2)} />
        </span>
        <label htmlFor={title.substring(0,2)} className='text-[#fdfffa] font-normal text-sm'>{title}</label>
    </span>
  )
}

export default Checkbox
