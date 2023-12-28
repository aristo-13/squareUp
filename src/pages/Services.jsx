import React from 'react'
import TextContainer from '../components/TextContainer'
import frontend from '../assets/serviceIcons/frontend.svg'
import ih from '../assets/serviceIcons/ih.svg'
import SCard from '../components/SCard'


const HeadText = ({text}) => {
  return (
      <p className='text-2xl text-[#98989a] font-medium p-[40px] border-y border-white/5'>
          {text}
      </p>
  )
}


function Services() {
  return (
    <div>
      <TextContainer Header="Our Services" subText="Transform your brand with our innovative digital solutions that captivate and engage your audience."/>
      <div className="md:w-[80%] p-4 md:p-[40px] flex flex-col gap-4 items-start">
                <h1 className='text-2xl md:text-4xl text-white font-semibold'>Design</h1>
                <p className='font-normal text-[#e6e6e6] text-sm md:text-[16px]'>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. </p>
                <span className='px-3 py-2 rounded-lg bg-[#414040] text-sm md:text-lg font-normal text-white'>Our design services include:</span>
        </div>

        <div className="">
          <HeadText text="User Experience (UX) Design"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
          </div>
        </div>
        <div className="">
          <HeadText text="User Interface (UI) Design"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
          </div>
        </div>
        <div className="">
          <HeadText text="Branding and Identity"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
          </div>
        </div>

        <div className="md:w-[80%] p-4 md:p-[40px] flex flex-col gap-4 items-start">
                <h1 className='text-2xl md:text-4xl text-white font-semibold'>Engineering</h1>
                <p className='font-normal text-[#e6e6e6] text-[16px]'>Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
                <span className='px-3 py-2 rounded-lg bg-[#414040] text-lg font-normal text-white'>Our engineering services include:</span>
        </div>

        <div className="">
          <HeadText text="Web Development"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
          </div>
        </div>
        <div className="">
          <HeadText text="Mobile App Development"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={ih}/>
              <SCard icon={frontend}/>
          </div>
        </div>
        <div className="">
          <HeadText text="Custom Software Development"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={frontend}/>
              <SCard icon={ih}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
          </div>
        </div>



        <div className="md:w-[80%] p-4 md:p-[40px] flex flex-col gap-4 items-start">
                <h1 className='text-2xl md:text-4xl text-white font-semibold'>Project management</h1>
                <p className='font-normal text-[#e6e6e6] text-[16px]'>Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
                <span className='px-3 py-2 rounded-lg bg-[#414040] text-lg font-normal text-white'>Our project management services include:</span>
        </div>

        <div className="">
          <HeadText text="Project Planning and Scoping"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={ih}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
          </div>
        </div>
        <div className="">
          <HeadText text="Agile Development"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={ih}/>
          </div>
        </div>
        <div className="">
          <HeadText text="Quality Assurance and Testing"/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SCard icon={frontend}/>
              <SCard icon={frontend}/>
              <SCard icon={ih}/>
              <SCard icon={frontend}/>
          </div>
        </div>



        <TextContainer Header="Let us Bring your Ideas to Life in the Digital World." subText="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."/>
    </div>
  )
}

export default Services
