import React from 'react';
import image3 from '../assets/image6.JPG';
import image4 from '../assets/image4.JPG';
import { backOut, motion } from 'framer-motion';


const Section2 = () => {
  const text =
    'A group of residents, driven by the shared challenge of water scarcity caused by over-extraction of riverbed materials, illegal mining, wetland destruction, river encroachment, concretization, and deforestation, embarked on a remarkable 25-day journey to Kathmandu. They are currently protesting at Maitighar Mandala, highlighting the severe disruption of the natural water supply and the resulting hardships.';

  return (
    <>
      <div className="border-t-[1px] border-zinc-300 mt-20 justify-between items-center">
        <div className="flex justify-stretch gap-96 mt-5">
          <h3 className="border rounded-xl p-2 ml-4 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer">
            Empowering Youth
          </h3>
          <h3 className="border rounded-xl p-2 ml-4 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer">
            Environmental Action
          </h3>
          <h3 className="border rounded-xl p-2 ml-4 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer">
            Community Development
          </h3>
        </div>
      </div>
      <div>
        <h2 className='text-[#36454F] text-center text-3xl font-bold mt-10'>25-day journey to <span className='text-[#9a1d20]'>Kathmandu</span></h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 3,
          delay: 0.2,
        }}
        className="mt-5  min-h-screen w-full"
      >
        <div className="grid grid-cols-2 gap-8 p-10 mt-10">
            <motion.div
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1,x: 50}}
          transition={{
            duration: 1,
            delay: 1,
            ease: backOut,
          }}
            
            >
              <div className='flex justify-stretch gap-2'>
               
          <img
            src={image3}
            className="h-72 w-72 object-cover border-4 border-white shadow-lg rounded-lg p-2"
            alt="Protest Scene"
          />
         
         
          <img src={image4} className="h-60 w-60 object-cover mt-20 border-4 border-white shadow-lg rounded-lg p-2"
            alt="Protest Scene" />
          
            </div>
        
          </motion.div>
          <div>
          <h2 className='text-[#9a1d20] text-lg underline '>About</h2>
          <div className="mt-6 mr-10 text-justify">
            {text.split(' ').map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                   // Stagger animation for each word
                }}
                viewport={{ once: false, amount: 0.5 }} // Trigger animation while scrolling
                className="font-normal text-xl text-[#343434] tracking-tight inline-block text-justify"
              >
                {item}<span className='text-white'>.</span>
              </motion.span>
            ))}
          </div>
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default Section2;
