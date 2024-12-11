import React from "react";
import MarqueeItem from "./MarqueeItem";
import image1 from '../assets/Image1.JPG'
import image2 from '../assets/image2.JPG'
import image3 from '../assets/image3.JPG'
import image4 from '../assets/image4.JPG'
import image5 from '../assets/image5.JPG'
import image6 from '../assets/image6.JPG'
import image7 from '../assets/image7.JPG'
import image8 from '../assets/image8.JPG'
import image9 from '../assets/image9.JPG'
import image10 from '../assets/image10.JPG'
import image11 from '../assets/image11.JPG'
import image12 from '../assets/image12.JPG'
import image13 from '../assets/image13.JPG'
import image14 from '../assets/image14.JPG'



const Marquee = () => {
  const upperMarquee = [
    image6,
 
   image1,
 
   image3,
  
   image5,
  
  
   image2,
   image4,
  ];

  const lowerMarquee = [
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14
  ];

  return (
   <>
    <div className="container mx-auto overflow-hidden">
     
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <div className="mt-3">
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
      </div>
    </div>
    </>
  );
};

export default Marquee;