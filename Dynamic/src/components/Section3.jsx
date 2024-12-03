import React from 'react';
import image13 from '../assets/image13.JPG';
import image14 from '../assets/image14.JPG';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Section3 = () => {
  return (
    <>
      <div className="bg-[#f7f9f9] min-h-[400px] mt-12">
        <div className="flex justify-evenly gap-12">
          <img
            src={image13}
            className="h-52 w-52 ml-28 mt-7 object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h1 className="font-bold text-3xl text-justify mt-20 tracking-tighter">
              Protest the critical state of water resources
            </h1>

            <p className="text-pretty antialiased font-sans opacity-70">
              Through their determined actions, the residents are advocating for the protection and restoration of vital water systems. Their protest not only highlights the critical state of water resources but also serves as a reminder of the interconnectedness of environmental stewardship and human well-being.
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
            className="h-52 w-52 object-cover mt-36 mr-28 rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Section3;
