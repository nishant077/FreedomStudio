import React from 'react'
import image1 from '../assets/Image1.JPG'
import image2 from '../assets/image2.JPG'
import image3 from '../assets/image3.JPG'

const MainPage = () => {
  return (
    <>
 <div className='container flex justify-around min-w-full mt-3'>
  <div>
 <h1 className=' mt-20 text-6xl font-bold bg-image-fill'>Save
        <br></br>
         <span className='text-[#9A1D20]'>Chure</span></h1>
         <p className='font-extralight text-2xl mt-5'>Movements for land rights</p>
         </div>
<div className='images_bgcolor'>
 <div className='flex justify-between  mt-10'>
 <div className='content space-y-7'>
    <img src={image1} className='h-64 w-64  rounded-2xl object-cover ml-16 '/>
    <img src={image2} className='h-64 w-64 rounded-2xl object-cover ml-16'/>
    </div>
    <div className='image mt-20'>
      <img src={image3} className='h-96 w-80 rounded-2xl  object-cover mr-10'/>
    </div>
 
 </div>
 </div>
 </div>

    </>
  )
}

export default MainPage