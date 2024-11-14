import React from 'react'
import image1 from '../assets/Image1.JPG'
import image2 from '../assets/image2.JPG'
import image3 from '../assets/image3.JPG'
import image4 from '../assets/image4.JPG'
import image5 from '../assets/image5.JPG'
import image6 from '../assets/image6.JPG'
import image7 from '../assets/image7.JPG'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'


const ImageSlider = () => {
  return (
    <>
    <div className='slider'>
        <div className='card'>
            <img src={image1}/>
        </div>
        <div className='card'>
            <img src={image2}/>
        </div>
        <div className='card'>
            <img src={image3}/>
        </div>
        <div className='card'>
            <img src={image4}/>
        </div>
        <div className='card'>
            <img src={image5}/>
        </div>
        <div className='card'>
            <img src={image6}/>
        </div>
        <div className='card'>
            <img src={image7}/>
        </div>
        <div className='card'>
            <img src={image8}/>
        </div>
        <div className='card'>
            <img src={image9}/>
        </div>
        

    </div>
    </>
  )
}

export default ImageSlider