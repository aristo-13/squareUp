import React from 'react'
import adobe from '../assets/comLogos/adobe.svg'
import amazon from '../assets/comLogos/amazon.svg'
import slack from '../assets/comLogos/slack.svg'
import spotify from '../assets/comLogos/spotify.svg'
import zapier from '../assets/comLogos/zapier.svg'
import zoom from '../assets/comLogos/zoom.svg'

function Companies() {
    const comps = [adobe,amazon,slack,spotify,zapier,zoom]
  return (
    <div className='w-full grid grid-cols-2 lg:flex lg:justify-between lg:items-center md:py-10'>
       {
        comps.map((comp)=>(
            <img src={comp} alt="" className='border border-white/5 lg:border-none py-2 px-4 w-full h-[100px] lg:h-auto lg:w-[140px]'/>
        ))
       }
    </div>
  )
}

export default Companies
