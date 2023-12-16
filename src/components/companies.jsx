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
    <div className='w-full flex justify-between items-center py-10'>
       {
        comps.map((comp)=>(
            <img src={comp} alt="" className='px-4 w-[140px]'/>
        ))
       }
    </div>
  )
}

export default Companies
