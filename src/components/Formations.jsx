import { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from "../constants";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = EXPERIENCES.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div id="FORMATIONS" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-neon"
      >
        FORMATIONS
      </motion.h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            key={currentIndex}
            className="flex-none w-full mx-[2%] transition-transform duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            {EXPERIENCES.map((experience, index) => (
              <div
                key={index}
                className={` flex-shrink-0 w-full p-4 ${index === currentIndex ? 'block' : 'hidden'}`}
              >
                <div
                  className="mb-8 flex flex-wrap lg:justify-center"
                >
                  <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                  </div>
                  <div className="px-[17px] w-full max-w-xl lg:w-3/4 flex flex-wrap">
                    <h6 className="mb-2 font-semibold">
                      {experience.role} -{" "}
                      <span className="text-sm text-purple-100">{experience.company}</span>
                    </h6>
                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="mt-2 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl text-gray-300 hover:text-purple-900 transition-colors duration-300"
        >
          <HiArrowCircleLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl text-gray-300 hover:text-purple-900 transition-colors duration-300"
        >
          <HiArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Experience;
