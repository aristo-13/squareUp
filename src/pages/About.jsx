import React from 'react'
import TextContainer from '../components/TextContainer'
import heroImg from "../assets/About/hero.svg"
import StoryCard from '../components/StoryCard'
import llogo from '../assets/llogo.svg'

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

      <div className='p-4 md:p-10 flex flex-col gap-8'>
            <div className="flex flex-col text-center md:text-start gap-3 md:flex-row md:gap-6 items-center">
                <img src={llogo} alt="" />
                <div className='text-[#98989a]'>
                    <h1 className='text-xl font-medium'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h1>
                    <p className='text-sm font-normal'>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between px-[20px] py-[12px] rounded-[10px] backdrop-blur-[6px] bg-[#1a1a1a] border border-white/5">
                <p className='text-sm flex flex-col lg:flex-row text-center items-center gap-2 text-[#98989a] font-normal'>Welcome to SquareUp <span className='p-2 bg-[#262626] rounded-[6px]'>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</span></p>

                <button className='px-[18px] py-3 rounded-lg bg-[#9eff00] text-base whitespace-nowrap'>Start Project</button>
            </div>
      </div>
    </div>
  )
}

export default About
