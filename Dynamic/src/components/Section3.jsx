import React from 'react';
import image13 from '../assets/image13.JPG';
import image14 from '../assets/image14.JPG';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Section3 = () => {
  return (
    <>
      <div className="bg-[#f7f9f9] min-h-[400px] mt-12 flex-wrap p-3">
        <div className="md:flex md:justify-evenly  md:gap-12 ">
          <img
            src={image13}
            className="md:h-60 h-54 md:w-60 w-72 ml-10 md:ml-28 mt-7 object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h1 className="font-bold md:text-3xl text-xl text-justify mt-20 md:tracking-tighter">
            Chure Conservation <span className='text-[#9a1d20]'>Movement</span>
            </h1>

            <p className="text-pretty antialiased font-sans opacity-70 text-justify m-2">
            This movement has emerged in response to severe water scarcity caused by environmental degradation, including illegal mining and deforestation. The demands of the movement include the immediate cessation of illegal excavation and the extraction of riverbed materials like stones, gravel, and sand, along with the closure of crusher industries in the Chure region. They call for banning open grazing, declaring Madhesh Province a drought-affected area, and making the Presidential Chure Conservation Development Committee independent. The protesters also demand the enactment of a separate Chure Act for effective conservation, the return of misused forest land to its original state, and proper land arrangements for genuine Dalits, landless individuals, and squatters. Additionally, they seek strict action against those involved in illegal activities in the region and warn of continued protests if their demands remain unaddressed.  
            </p>

            <a
              href="https://www.youtube.com/@freedomstudio4891"
              target="_blank"
              aria-label="Mail"
              className="text-[#9a1d20] hover:text-[#8b5354]"
            >
              <button className="text-[#F5F5DC] font-light bg-[#9a1d20] rounded-md p-1 mt-7">
                Watch our videos <i className="fa-solid fa-play text-lg text-[#F5F5DC]"></i>
              </button>
            </a>
          </div>
          <img
            src={image14}
            className="h-52 w-52 object-cover mt-64 mr-28 rounded-lg lg:block hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Section3;
