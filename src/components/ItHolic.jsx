import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import it1 from "../assets/itholic/it1.png";
import it2 from "../assets/itholic/it2.png";
import it3 from "../assets/itholic/it3.png";
import itl1 from "../assets/itholic/ITHolic1.png";
import itl2 from "../assets/itholic/ITHolic2.png";
import itl3 from "../assets/itholic/ITHolic3.png";

import it31 from "../assets/itholic/devjam.jpg";
import it32 from "../assets/itholic/ClosingCeremony.png";
import it33 from "../assets/itholic/itholic_cp.png";

const ItHolic = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set playback speed to 2x
    }
  }, []);

  return (
    <div id="ITHOLIC" className="border-b border-neutral-900 pb-4 m-0 py-20">
        <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="text-center text-5xl font-bold text-white  text-neon"
                style={{ fontFamily: '"Share Tech", sans-serif' }}
            >
                MAIN EVENT
            </motion.h2>
            <p className="text-center text-[17px] font-bold text-neon p-1" style={{ fontFamily: '"Share Tech", sans-serif' }}>
            IT Holic is a hub for anyone obsessed with and passionate about technology<br/> and computing. Each year, we explore different themes and challenges in the world of IT.

            </p>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* CP CELL */}
                <motion.div
                    className="relative p-2 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        {/* Top images */}
                        <div className="flex space-x-[10px] md:space-x-[40px] items-center mb-20">
                            {/* Image with gold neon */}
                            <div className="flex flex-col items-center space-y-4">
  <motion.img
    src={itl1}
    alt="cp1"
    className="w-[250px] "
    whileHover={{ scale: 1.1 }}
  />
  <motion.img
    src={it1}
    alt="cp1"
    className="w-[200px] shadow-lg shadow-purple-300/90"
    whileHover={{ scale: 1.1 }}
  />
</div>

                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center space-y-4">
  <motion.img
    src={itl3}
    alt="cp1"
    className="w-[350px]"
    whileHover={{ scale: 1.1 }}
  />
  <motion.img
    src={it3}
    alt="cp1"
    className="w-[200px] shadow-lg shadow-purple-300/90"
    whileHover={{ scale: 1.1 }}
  />
</div>
                        
                        </div>

                            {/* Image with gold neon */}
                            <div className="flex flex-col items-center space-y-4">
  <motion.img
    src={itl2}
    alt="cp1"
    className="w-[250px]"
    whileHover={{ scale: 1.1 }}
  />
  <motion.img
    src={it2}
    alt="cp1"
    className="w-[200px] shadow-lg shadow-purple-300/90"
    whileHover={{ scale: 1.1 }}
  />
</div>
                        </div>
                    </div>





                    
                    {/* Bottom Div with Text */}
                    

                    <div className="flex flex-col items-center">
                        {/* Top images */}
                        <div className="flex space-x-[10px] md:space-x-[50px] items-center">
                            {/* Image with gold neon */}
                            <div className="flex flex-col items-center space-y-4 mt-[-20px]">
 
  <motion.img
    src={it31}
    alt="cp1"
    className="w-[200px] shadow-lg shadow-purple-300/90"
    whileHover={{ scale: 1.1 }}
  />
</div>

                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center space-y-4">
 
  <motion.img
    src={it32}
    alt="cp1"
    className="w-[400px] shadow-lg shadow-purple-300/90"
    whileHover={{ scale: 1.1 }}
  />
</div>
                        </div>

                            {/* Image with gold neon */}
                            <div className="flex flex-col items-center space-y-4">
  
  <motion.img
    src={it33}
    alt="cp1"
    className="w-[200px] shadow-lg shadow-purple-300/90"
    whileHover={{ scale: 1.1 }}
  />
</div>
                        </div>
                    </div>
                </motion.div>
            </div>
    </div>




// -----------------------


);
};

export default ItHolic;
