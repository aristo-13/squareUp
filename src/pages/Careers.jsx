import React from 'react'
import TextContainer from '../components/TextContainer'
import StoryCard from '../components/StoryCard'
import SquareUpVit from '../components/SquareUpVit'
import fd from "../assets/serviceIcons/frontend.svg"
import eng from "../assets/serviceIcons/eng.svg"
import des from "../assets/serviceIcons/design.svg"

const HeadText = ({text}) => {
    return (
        <p className='text-2xl text-[#98989a] font-medium p-[40px] border-y border-white/5'>
            {text}
        </p>
    )
}


const Card = ({header,icon}) => {
    return (
   <div className='flex-1 flex flex-col items-center gap-10 p-5 md:p-10 border-x border-gray-700/20'>
        <div className='p-3 rounded-xl border-x border-t bg-white/5 border-gray-700/50 self-start'><img src={icon} alt="" /></div>
        <h1 className='font-semibold text-xl text-white self-start'>{header}</h1>
        <p className='text-sm font-normal text-[#E6E6E6]'>Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.</p>
         
         <button className='px-[16px] py-[14px] rounded-lg w-full bg-[#373737] text-white'>
            Apply Now
         </button>
    </div>
    )
}

function Careers() {
  return (
    <div>
      <TextContainer Header="Join Our Team at SquareUp" subText="Unlock your potential and join our team of innovators and problem solvers."/>

      <div className='pt-[60px]'>
           <div className="md:w-[80%] p-4 md:p-[40px] flex flex-col gap-4 items-start">
                <h1 className='text-2xl md:text-4xl text-white font-semibold'>Welcome to SquareUp, where talent meets opportunity!</h1>
                <p className='font-normal text-[#e6e6e6] text-[16px]'>At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.</p>
                <span className='px-3 py-2 rounded-lg bg-[#414040] text-lg font-normal text-white'>Why Work at SquareUp?</span>
           </div>

           <div className='grid lg:grid-cols-2'>
              <StoryCard head="Innovative and Impactful Projects"/>
              <StoryCard head="Supportive Environment"/>
              <StoryCard head="Continuous Learning and Growth"/>
              <StoryCard head="Challenging and Rewarding Work"/>
           </div>
      </div>
         <div className='pt-[80px] pb-[40px] px-[50px]'>
            <h1 className='text-white text-4xl font-normal'>Current Openings</h1>
            <p className='text-[16px] font-normal text-[#e6e6e6]'>We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.</p>
         </div>

        <div>
            <HeadText  text="Design Job Openings"/>
            <div className='flex flex-col lg:flex-row'>
                <Card header='UI Designer' icon={des}/>
                <Card header='UX Designer' icon={eng}/>
                <Card header='Design Head' icon={des}/>
            </div>

        </div>
        <div>
            <HeadText  text="Development Job Openings"/>
            <div className='flex flex-col lg:flex-row'>
                <Card header='Front - End Developer' icon={fd}/>
                <Card header='Back - End  Developer' icon={fd}/>
                <Card header='Full Stack Developer' icon={fd}/>
            </div>

        </div>
        <div>
            <HeadText  text="Managements Job Openings"/>
            <div className='flex flex-col lg:flex-row'>
                <Card header='BA Manager' icon={eng}/>
                <Card header='Project Manager' icon={des}/>
                <Card header='HR Manager' icon={fd}/>
            </div>

        </div>
        <div>
            <HeadText  text="QA Job Openings"/>
            <div className='flex flex-col lg:flex-row'>
                <Card header='QA Tester' icon={des}/>
                <Card header='SQL Tester' icon={eng}/>
                <Card header='Manual Tester' icon={fd}/>
            </div>

        </div>
        <div className='p-4'>
          <SquareUpVit />
        </div>
      
    </div>
  )
}

export default Careers
