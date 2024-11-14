import React, { useRef } from 'react'
import image1 from '../assets/image1.JPG'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const DynamicPage = () => {
  
const name = useRef()
  
const t1=gsap.timeline()

  useGSAP(()=>{
    t1.from(name.current.querySelectorAll('h1,h2,p,img'),{
      y: -30,
      duration: 0.5,
      delay:0.2,
      opacity:0,
      stagger: 0.5,
      ease: 'power1.in'
    })
 })
   
  return (
    <>
    <section>
    <div ref={name} className='Heading flex flex-col md:flex-row'>
        <div  className='content text-center px-5 space-y-4'>
      <h1 className='mt-8 text-8xl font-bold bg-image-fill'>Save
        <br></br>
         <span className='text-[#9A1D20]'>Chure</span></h1>
      <h2 className=" text-3xl outline-text">Movements for land rights</h2>
      <p className="text-lg font-light text-justify">
            A group of residents, driven by the shared challenge of water scarcity caused by over-extraction of riverbed materials, illegal mining, wetland destruction, river encroachment, concretization, and deforestation, embarked on a remarkable 25-day journey to Kathmandu. They are currently protesting at Maitighar Mandala, highlighting the severe disruption of the natural water supply and the resulting hardships.
          </p>
      </div>

       <img  src={image1} alt='Heading Image' className='h-full w-2/4 mt-8 border rounded-3xl'/>

    </div>
    </section>
    </>
  )
}

export default DynamicPage