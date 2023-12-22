import React from 'react'
import TextContainer from '../components/TextContainer'
import heroImg from "../assets/About/hero.svg"
import StoryCard from '../components/StoryCard'

import SquareUpVit from '../components/SquareUpVit.jsx'

function About() {
  return (
    <div>
      <TextContainer Header="About Us" subText="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."/>

      <div className='flex flex-col lg:flex-row gap-4 lg:gap-[80px] items-center px-2 py-8 lg:px-20 lg:py-16 '>
        <div className="flex-1">
            <h1 className='text-xl md:text-3xl font-semibold text-white'>About SquareUp</h1>
            <p className='text-[12px] md:text-base text-[#e6e6e6] font-normal'>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
        </div>
        <div className="flex-1 p-1 md:p-8">
            <img src={heroImg} alt="" className='w-full h-full'/>
        </div>
      </div>

      <div className="border-y border-white/5">
          <h1 className='w-full py-16 text-white text-3xl font-semibold px-4'>Our Story</h1>
          <div className='grid md:grid-cols-2'>
             <StoryCard head="Design" num="01"/>
             <StoryCard head="Engineering" num="02"/>
             <StoryCard head="Project Management" num="03"/>
             <StoryCard head="Collaboration" num="04"/>
             <StoryCard head="Client-Centric Approach" num="05"/>
             <StoryCard head="Driving Success" num="06"/>
          </div>
      </div>

      <SquareUpVit />
    </div>
  )
}

export default About
