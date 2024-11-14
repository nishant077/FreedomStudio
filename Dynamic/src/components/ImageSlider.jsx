import React from 'react'
import image2 from '../assets/image2.JPG'
import image3 from '../assets/image3.JPG'
import image4 from '../assets/image4.JPG'
import image5 from '../assets/image5.JPG'
import image6 from '../assets/image6.JPG'
import image7 from '../assets/image7.JPG'
import image8 from '../assets/image8.JPG'

const ImageSlider = () => {
  return (
    <>
    <div className='slider-img'>
        <div className='images'>
        <img src={image2} className='inline-block h-80 w-96 p-4  shadow-2xl rounded-2xl'/>
        </div>
        <div className='images'>
        <img src={image3} className='inline-block h-80 w-96 p-4'/>
        </div>
        <div className='images'>
        <img src={image4} className='inline-block h-80 w-96 p-4'/>
        </div>
        <div className='images'>
        <img src={image5} className='inline-block h-80 w-96 p-4'/>
        </div>
        <div className='images'>
        <img src={image6}className='inline-block h-80 w-96 p-4'/>
        </div>
        <div className='images'>
        <img src={image7}className='inline-block h-80 w-96 p-4'/>
        </div>
        <div className='images'>
        <img src={image8}className='inline-block h-80 w-96 p-4'/>
        </div>
    </div>
    </>
  )
}

export default ImageSlider