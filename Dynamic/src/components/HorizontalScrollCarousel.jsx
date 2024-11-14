import {useRef} from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import image4 from "../assets/image4.JPG";
import image5 from "../assets/image5.JPG";
import image6 from "../assets/image6.JPG";
import image7 from "../assets/image7.JPG";

import Card from './Card';

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <>
      <section ref={targetRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default HorizontalScrollCarousel

const cards = [
    {
      image: image2,
      title: "Title 1",
      id: 1,
    },
    {
      image: image3,
      title: "Title 2",
      id: 2,
    },
    {
      image: image4,
      title: "Title 3",
      id: 3,
    },
    {
      image: image5,
      title: "Title 4",
      id: 4,
    },
    {
      image: image6,
      title: "Title 5",
      id: 5,
    },
    {
      image: image7,
      title: "Title 6",
      id: 6,
    },
  ];