import React from 'react';
import image1 from '../assets/image1.JPG';
import './Popup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PopupItem = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="popup shadow-lg rounded-lg w-5/12 border bg-white">
          <div className="flex">
            {/* Side Image */}
            <div className="side-image w-2/5">
              <img
                src={image1}
                alt="Save Chure"
                className="object-cover w-full h-full rounded-l-lg"
              />
            </div>

            {/* Card Details */}
            <div className="card-details w-3/5 p-4 space-y-2">
              {/* Title */}
              <h1 className="font-bold text-2xl">Save <span className='text-[#9A1D20]'>Chure</span></h1>

              {/* Location */}
              <div className="flex items-center text-gray-600">
                <i className="fa-solid fa-location-dot text-[#9A1D20] mr-2"></i>
                <h2 className="font-medium text-base"> Lumbini,Rupandehi</h2>
              </div>

              {/* Description */}
              <p className="text-sm text-justify text-gray-700">
                A group of residents, driven by the shared challenge of water
                scarcity caused by over-extraction of riverbed materials.
              </p>
              <div className="flex items-center text-gray-600">
                <i className="fa-solid fa-person text-[#9A1D20] mr-2"></i>
                <h2 className="font-medium text-base"> Approximately 20,000 victims </h2>
              </div>

              {/* Footer with Tag and Button */}
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-sm font-medium text-gray-500">
                  Sahasi Kadam 
                </h2>
                <button
                  className="bg-[#944546] text-white px-4 py-2 rounded-xl shadow-md 
                  hover:bg-[#8b3d3d] hover:scale-105 active:scale-95 
                  transition-transform duration-300 ease-in-out"
                >
                  Learn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupItem;
