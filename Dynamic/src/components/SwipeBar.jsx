import React from "react";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";




const SwipeBar = () => {
  return (
  <>
     <div className="bg-white">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500 text-3xl">
          Movements Gallery
        </span>
      </div>
      <div className="-mt-20">
      <HorizontalScrollCarousel/>
      </div>
      
     
     
    </div>



  
      </>
  );
};

export default SwipeBar;


