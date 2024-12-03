import React from 'react';
import image1 from '../assets/Image1.JPG';
import image2 from '../assets/image2.JPG';
import image3 from '../assets/image3.JPG';
import {motion} from 'framer-motion';

const MainPage = () => {
  return (
   
    <div className="flex flex-col md:flex-row mt-10  h-96 md:h-96 px-6 py-10 md:px-16 md:py-0">
      {/* Text Section */}
     
      <div className="heading flex-1 space-y-6 md:space-y-8 text-center md:text-left">
    
        <h1 className="uppercase leading-[6vw] md:text-6xl font-bold  mt-20 text-[#2E2E2E]">
          Save <span className="text-[#9a1d20]">Chure</span>
        </h1>
        <p className="text-2xl md:text-3xl font-light text-gray-700">
          Movements for Land Rights
        </p>
        <p className="text-sm md:text-lg font-extralight text-justify text-gray-600">
          "United by the fight against water scarcity and ecological devastation, residents march to Kathmandu, urging action to save Chure and restore natural balance."
        </p>
      
        <div className='rounded-full ml-96 w-6 h-6 bg-[#9a1d20]'></div>
      </div>
    
      <div className='rounded-full mt-5 w-7 h-7 bg-[#dc7633]'></div>
     
      {/* Image Section */}
      <div className="heading_image flex-1 flex justify-center items-center md:justify-end relative mt-10 md:mt-0">
        <div
         className="relative w-[300px] h-[300px]">
          {/* Main Image */}
         
          <img
            src={image1}
            alt="Main Image"
            className="w-full  h-full object-cover border-4 border-white shadow-lg rounded-full absolute right-[40%] z-20"
          />
          {/* Top Left Image */}
        
          <img
            src={image3}
            alt="Top Left Image"
            className="w-[120px] h-[120px] object-cover border-4 border-white shadow-md rounded-full absolute top-[-20%] left-[40%] z-10"
          />
            
          {/* Bottom Right Image */}
          <img
            src={image2}
            alt="Bottom Right Image"
            className="w-[180px] h-[180px] object-cover border-4 border-white shadow-md rounded-full absolute bottom-[-20%] right-[130%] z-10"
          />
          
        </div>
      </div>
      <div className='rounded-full mt-48 w-5 h-5 flex justify-end bg-[#28b463]'></div>
        
    </div>

    
  );
};

export default MainPage;
