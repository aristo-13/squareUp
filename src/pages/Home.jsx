import React from 'react'
import modal from '../assets/modal.svg'
import Companies from '../components/companies';
import TextContainer from '../components/TextContainer';
import ServicesCard from '../components/ServicesCard';
import eng from '../assets/serviceIcons/eng.svg'
import design from '../assets/serviceIcons/design.svg'
import pm from '../assets/serviceIcons/pm.svg'
import WhyChooseCard from '../components/WhyChooseCard';
import CP from '../assets/whycU/CP.svg'
import CSA from '../assets/whycU/CSA.svg'
import exp from '../assets/whycU/exp.svg'
import RDS from '../assets/whycU/RDS.svg'
import FeedbackCard from '../components/FeedbackCard';
import Accordion from '../components/Accordion';
import llogo from '../assets/llogo.svg'
import Bform from '../components/Bform';

function Home() {
      return (
        <div className='w-full flex flex-col'>
          <div className='w-full p-2 relative'>
            <div className='mx-auto full h-[80vh] flex justify-center items-end'>
              <img src={modal} alt="" className='w-full'/>
            </div>

            <div className='w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[50px] justify-center items-center'>
                <h1 className='font-semibold p-2 text-lg md:text-2xl lg:text-[48px] leading-3 text-center text-white'>A Dgital Product Product Studio that will Work</h1>
                <div className="w-[97%] md:w-auto border border-gray-700 bg-[#262626]/20 backdrop-blur rounded-md">
                  <p className='text-center md:flex md:items-center md:justify-center px-[2px] gap-1 md:px-[40px] py-[24px] text-gray-500'>
                    For <span className='md:px-[14px] md:whitespace-nowrap md:py-[12px] md:bg-gray-700/30 tmd:ext-white rounded-lg'>Startups</span> , <span className='md:px-[14px] whitespace-nowrap md:py-[12px] md:bg-gray-700/30  md:text-white rounded-lg'>Enterprise leaders</span>, <span className='md:px-[14px] whitespace-nowrap md:py-[12px] md:bg-gray-700/30  md:text-white rounded-lg'>Media Publishers</span> and <span className='md:px-[14px] whitespace-nowrap md:py-[12px] md:bg-gray-700/30  md:text-white rounded-lg'>Social Good</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className='rounded-[10px]  border border-gray-700 px-4 md:px-[28px] py-3 md:py-[18px] text-white bg-[#333333]/60 backdrop-blur'>Our Works</button>
                  <button className='rounded-[10px]  border border-gray-700 px-4 md:px-[28px] py-3 md:py-[18px] text-gray-700 bg-[#9EFF00]'>Contact Us</button>
                </div>
            </div>
          </div>
          <Companies />
          <TextContainer Header='Our Services' subText='Transform your brand with our innovative digital solutions that captivate and engage your audience.'/>

          <div className='flex flex-col md:flex-row'>
             <ServicesCard header='Design' icon={design} text="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."/>
             <ServicesCard header='Engineering' icon={eng} text="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."/>
             <ServicesCard header='Project Management' icon={pm} text="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."/>
          </div>

          <TextContainer Header="Why Choose SquareUp?" subText="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."/>

          <div className='w-full  grid md:grid-cols-2'>
            <WhyChooseCard header="Expertise" icon={exp} text="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions." />
            <WhyChooseCard header="Client-Centric Approach" icon={CSA} text="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success." />
            <WhyChooseCard header="Results-Driven Solutions" icon={RDS} text="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage." />
            <WhyChooseCard header="Collaborative Partnership" icon={CP} text="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive." />
          </div>

          <TextContainer Header="What our Clients say About us" subText="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"/>

          <div className='w-full grid md:grid-cols-2'>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </div>


          <TextContainer Header="Frequently Asked Questions" subText="Still you have any questions? Contact our Team via hello@squareup.com"/>

          <div className='grid md:grid-cols-2 p-4'>
            <Accordion num={"01"}/>
            <Accordion num={"02"}/>
            <Accordion num={"03"}/>
            <Accordion num={"04"}/>
            <Accordion num={"05"}/>
            <Accordion num={"06"}/>
            <Accordion num={"07"}/>
            <Accordion num={"08"}/>
          </div>

          <div className='flex flex-col items-center justify-center gap-[50px] py-[150px] bg-slate-400/5'>
            <img src={llogo} alt="" />
             <TextContainer Header="Thank you for your Interest in SquareUp." subText="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."/>
              <button className='px-[18px] py-[20px] rounded-lg bg-[#9EFF00]'>
                Start Project
              </button>
          </div>
          <div className='lg:px-[200px]'>
            <Bform />
          </div>
        </div>
      );
}

export default Home
