
import React, { useEffect, useState } from 'react';
import image1 from '../assets/Image1.JPG'
import image2 from '../assets/image2.JPG'
import image3 from '../assets/image3.JPG'
import image4 from '../assets/image4.JPG'
import image5 from '../assets/image5.JPG'
import image6 from '../assets/image6.JPG'
import image7 from '../assets/image9.JPG'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
  ];

  const visibleCards = 3; // Number of cards visible at a time
  const cardHeight = '310px'; // Card height

  // Automatically move to the next card
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  // Compute the visible cards dynamically
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(cards[(currentIndex + i) % cards.length]);
    }
    return visible;
  };

  const visibleCardsData = getVisibleCards();

  return (
    <div className="flex justify-center items-center w-[1300px] ml-5 bg-black p-8 h-[450px] relative">
      <div className="flex gap-8">
        {visibleCardsData.map((card, index) => (
          <div
            key={card.id}
            className={`w-72  border-gray-300 flex-shrink-0 transform transition-transform duration-300 ${
              index === 1 ? 'scale-110' : 'scale-90'
            }`}
            style={{ height: cardHeight }}
          >
            <div className="p-3 text-center">
              <img src={card.image} className='object-cover w-72 h-72 rounded-xl'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;