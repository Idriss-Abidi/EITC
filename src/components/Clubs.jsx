import { useState } from "react";
import { motion } from "framer-motion";
import cp from "../assets/cells/cp2.png";
import tr from "../assets/cells/training.png";
import gd from "../assets/cells/gaming.png";
import ds from "../assets/cells/design.png";
import sp from "../assets/cells/sponsoring.png";
import md from "../assets/cells/media.png";
import ev from "../assets/cells/event.png";
// import re from "../assets/cells/relations.png";

import cp1 from "../assets/pilotage/cp1.png";
import cp2 from "../assets/pilotage/cp2.png";

import tr1 from "../assets/pilotage/tr1.png";
import tr2 from "../assets/pilotage/tr2.png";

const iconMove = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Clubs = () => {
    const [selectedCell, setSelectedCell] = useState(null);

    return (
        <div id="CELLS" className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl text-white text-neon"
            >
                CELLS
            </motion.h2>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* CP CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-10 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Competitive Programming Cell
                            </h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">
                            {/* Image with gold neon */}
                            <motion.img
                                src={cp1}
                                alt="cp1"
                                className="w-[250px] shadow-lg shadow-yellow-300/90"
                                whileHover={{ scale: 1.1 }}
                            />
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={cp}
                            alt="CP Cell"
                            className="w-[12rem] h-[12rem] rounded-full shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-12 bg-darkblue-opacity border border-blue-500 p-2 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-2xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Develops skills in competitive programming
                                and prepares for competitions.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            <motion.img
                                src={cp2}
                                alt="cp2"
                                className="w-[250px] shadow-lg shadow-yellow-300/90"
                                whileHover={{ scale: 1.1 }}
                            />
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>



            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-[10rem]">
                {/* CP CELL */}
                <motion.div
                    className="relative p-4 text-white rounded-lg flex flex-col items-center"
                >
                    {/* Top Div with Images */}
                    <div className="flex flex-col items-center">
                        <div className="m-2">
                            <h3 className="text-center text-4xl font-bold text-white p-10 text-neon"
                            style={{ fontFamily: '"Share Tech", sans-serif' }}>
                                Training Cell
                            </h3>
                        </div>
                        {/* Top images */}
                        <div className="flex space-x-[50px] items-center">
                            {/* Image with gold neon */}
                            <motion.img
                                src={tr1}
                                alt="cp1"
                                className="w-[250px] shadow-lg shadow-yellow-300/90"
                                whileHover={{ scale: 1.1 }}
                            />
                            {/* Center image with purple neon */}
                            <div className="flex flex-col items-center">
                            <motion.img
                            src={tr}
                            alt="CP Cell"
                            className="w-[12rem] h-[12rem] rounded-full shadow-lg shadow-blue-400/90"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="mt-12 bg-darkblue-opacity border border-blue-500 p-2 shadow-lg shadow-blue-400/90">
                            <p className="text-center text-2xl font-bold text-white p-4" style={{ fontFamily: '"Share Tech", sans-serif' }}>
                            Organizes workshops and training sessions across various IT-related fields.
                            </p>
                        </div>
                        </div>

                            {/* Image with gold neon */}
                            <motion.img
                                src={tr2}
                                alt="cp2"
                                className="w-[250px] shadow-lg shadow-yellow-300/90"
                                whileHover={{ scale: 1.1 }}
                            />
                        </div>
                    </div>
                    {/* Bottom Div with Text */}
                    
                </motion.div>
            </div>




            
            
        </div>
    );
};

export default Clubs;
