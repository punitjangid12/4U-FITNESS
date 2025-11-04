import React, { useState } from "react";
import  Strength from "../Images/Strength.jpg";
import Yoga  from "../Images/Yoga.jpg";
import  Cycling from "../Images/Cycling.jpg";
import Kickboxing from "../Images/Kickboxing.jpg";
import  Zumba from "../Images/Zumba.jpg";

import { motion } from "motion/react"

const services = [
  {
    name: "STRENGTH" ,
    image: Strength,
  },
  {
    name: "YOGA-SWING",
    image: Yoga,
  },
  {
    name: "CYCLING",
    image: Cycling,
  },
  {
    name: "ZUMBA",
    image: Zumba,
  },
  {
    name: "KICK BOXING",
    image: Kickboxing,
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className=" bg-black text-white flex flex-col items-center justify-center p-10 gap-5 ">
 < motion.div

 ><h2 className="text-6xl font-bebas tracking-widest sm:text-lg md:text-xl lg:text-2xl xl:text-4xl  transition-transform duration-300 ease-in-out">SERVICES </h2></motion.div>
      <motion.div
      
      initial= {{opacity:0, scale:0}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:1}}
      className="flex gap-10 items-center max-w-3xl w-full">
        
        {/* 👉 Left Image Section */}
        <div className="relative w-1/2 h-[400px] overflow-hidden rounded-2xl">
          {services.map((service, index) => (
            <img
              key={index}
              src={service.image}
              alt={service.name}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                hovered === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          ))}
        </div>

        {/* 👉 Right Services List */}
        <div className="flex flex-col w-1/2 space-y-8 ">
          

          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white "
            >
              {service.name}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
