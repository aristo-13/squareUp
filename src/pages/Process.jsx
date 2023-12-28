import React from 'react'
import TextContainer from '../components/TextContainer'
import Bform from '../components/Bform'
import StoryCard from '../components/StoryCard'

function Process() {
  return (
    <div>
      <TextContainer Header="Process of Starting the Project" subText="At SquareUp, we value transparency, collaboration, and delivering exceptional results."/>

      <div className='pt-[80px] flex flex-col gap-10'>
           <div className=" px-4 md:px-[40px] flex flex-col gap-4 items-start">
                <h1 className='text-4xl text-white font-semibold'>At SquareUp</h1>
                <p className='font-normal text-[#e6e6e6] text-sm md:text-[16px]'>We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
                <span className='px-3 py-2 rounded-lg bg-[#414040] text-sm md:text-lg font-normal text-white'>Here's an overview of our typical process:</span>
           </div>
           

           <div className='grid md:grid-cols-2'>
             <StoryCard head="Design" num="01"/>
             <StoryCard head="Engineering" num="02"/>
             <StoryCard head="Project Management" num="03"/>
             <StoryCard head="Collaboration" num="04"/>
             <StoryCard head="Client-Centric Approach" num="05"/>
             <StoryCard head="Driving Success" num="06"/>
             <StoryCard head="Client-Centric Approach" num="07"/>
             <StoryCard head="Driving Success" num="08"/>
          </div>

          <TextContainer Header="Thank you for your Interest in SquareUp." subText="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."/>
      </div>

      <div className='lg:px-[200px]'>
            <Bform />
          </div>
    </div>
  )
}

export default Process
