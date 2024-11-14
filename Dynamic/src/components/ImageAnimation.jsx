import React, { useRef } from 'react'
import image2 from '../assets/image2.JPG'
import image3 from '../assets/image3.JPG'
import image4 from '../assets/image4.JPG'
import image5 from '../assets/image5.JPG'
import image6 from '../assets/image6.JPG'
import image7 from '../assets/image7.JPG'
import image8 from '../assets/image8.JPG'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageAnimation = () => {

  const box = useRef();

  useGSAP(()=>{

    let t17 = gsap.timeline({
      scrollTrigger:{
        trigger:".part-7",
        start:"50% 50%",
        end:"250% 50%",
        pin:true,
        scrub:1,
      }
    });
    t17.to(".our-work-txt-div",{
      height:"70vh",
    },'height')
    t17.to(".our-work-txt",{
      height:"70vh",
    },'height')
    t17.to(".our",{
      left:"0%",
    },'height')

    t17.to(".work",{
      right:"0%",
    },'height')

    t17.to(".scroll-img",{
      marginTop:"-450%",
    })

  },{scope:box})

  return (
    <>
    <div ref={box} className='main'>
    <div className='part-7 flex items-center justify-center mt-11'>
       <div className='our-work-txt'>
        <h2 className='our'>Our</h2>
        <h2 className='work'>Movements</h2>
       </div>
       <div className='our-work-txt-div'>
        <div className='scroll-work'>
          <div className='scroll-img'>
          <img src={image2}/>
          <img src={image3}/>
          <img src={image4}/>
          <img src={image5}/>
          <img src={image6}/>
          <img src={image7}/>
          <img src={image8}/>
          </div>
        </div>
       </div>
    </div>
    </div>
    </>
  )
}

export default ImageAnimation