import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient object-cover">
      <motion.div
        initial={{ x: from }} // Correct usage of "from"
        animate={{ x: to }} // Correct usage of "to"
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            className="h-60 w-80 pr-4" // Adjust height, width, and spacing as needed
            src={image}
            alt={`Marquee Image ${index + 1}`} // Added alt for accessibility
            key={index}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }} // Correct usage of "from"
        animate={{ x: to }} // Correct usage of "to"
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            className="h-60 w-80 pr-4" // Same adjustments for the second row
            src={image}
            alt={`Marquee Image ${index + 1}`} // Added alt for accessibility
            key={`${index}-clone`} // Unique key for duplicate set
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
