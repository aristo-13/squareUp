import React from 'react'
import TextContainer from '../components/TextContainer'
import WorkCard from '../components/WorkCard'
import webimg1 from '../assets/work/webimg1.svg'
import webimg2 from '../assets/work/webimg2.svg'
import webimg3 from '../assets/work/webimg3.svg'

function Work() {
  return (
    <div>
      <TextContainer Header="Our Works" subText="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."/>

      <div className="md:w-[80%] p-4 md:p-[40px] flex flex-col gap-4 items-start">
          <h1 className='text-2xl md:text-4xl text-white font-semibold'>At SquareUp</h1>
          <p className='font-normal text-[#e6e6e6] text-sm md:text-[16px]'>We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
          <span className='px-3 py-2 rounded-lg bg-[#414040] text-sm md:text-lg font-normal text-white'>Here are ten examples of our notable works:</span>
        </div>


      <div className='grid md:grid-cols-2'>
          <WorkCard  img={webimg1} Header="E-Commerce Platform for Fashion Hub" headText="Chic Boutique"/>
          <WorkCard  img={webimg2} Header="Mobile App for Food Delivery Service" headText="HungryBites"/>
          <WorkCard  img={webimg1} Header="Booking and Reservation System for Event Management" headText="EventMasters"/>
          <WorkCard  img={webimg1} Header="Custom Software for Workflow Automation" headText="ProTech Solutions"/>
          <WorkCard  img={webimg3} Header="Mobile App for Fitness Tracking" headText="FitLife Tracker"/>
          <WorkCard  img={webimg2} Header="Web Portal for Real Estate Listings" headText="Dream Homes Realty"/>
          <WorkCard  img={webimg1} Header="Custom Software for Supply Chain Management" headText="Global Logistics Solutions"/>
          <WorkCard  img={webimg2} Header="Mobile App for Travel Planning" headText="WanderWise"/>
          <WorkCard  img={webimg1} Header="Web Application for Customer Relationship Management" headText="ConnectCRM"/>
          <WorkCard  img={webimg3} Header="E-Commerce Platform for Fashion Hub" headText="Chic Boutique"/>
      </div>

      <TextContainer Header="Let us Bring your Ideas to Life in the Digital World." subText="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."/>
    </div>
  )
}

export default Work
