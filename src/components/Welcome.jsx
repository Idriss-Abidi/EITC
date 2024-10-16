import { HERO_CONTENT } from "../constants"
import eitcLogo from "../assets/eitcLogo.png"
import { delay, motion } from 'framer-motion';
import { FaHandSparkles, FaStar } from 'react-icons/fa';

const textVariants = {
  initial: { y: -20 },
  animate: { y: 0, transition: { duration: 1.5} }
};

const waveVariants = {
  animate: {
    rotate: [0, 10, -10, 0],
    transition: { duration: 2, repeat: Infinity, repeatType: 'loop' }
  }
};

const starVariants = {
  animate: {
    scale: [1, 1.2, 1], // Animates scaling
    filter: [
      "drop-shadow(0 0 2px rgba(0, 255, 255, 0.5))",
      "drop-shadow(0 0 3px rgba(0, 255, 255, 1))",
      "drop-shadow(0 0 2px rgba(0, 255, 255, 0.5))",
    ], // Neon glow effect animation
    transition: {
      duration: 3, // Duration of the entire animation
      repeat: Infinity, // Infinite loop
      ease: "easeInOut",
    },
  },
};


const container1=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay: delay},
    },
})
const container2=(delay)=>({
    hidden:{x:100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay: delay},
    },
})
const Welcome = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2"> 
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container1(0)} initial="hidden" id="eitc" animate="visible" className="my-20 lg:pr-[10%] text-7xl lg:text-9xl">EITC</motion.h1>
                    <motion.span variants={container1(0.5)} initial="hidden" id="eitcn" animate="visible" className="my-1 lg:pr-[10%] text-2xl lg:text-4xl">ENSIAS IT CLUB</motion.span>
                    <motion.div variants={container1(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {/* <WelcomeSection/> */}
                        {/* <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-4"
      >
        Hello there!
      </motion.h1> */}
      
      {/* <div className="flex items-center"> */}
        {/* <motion.h2
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="mb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
        >
          Welcome to our club
        </motion.h2>
        <motion.div
          variants={waveVariants}
          animate="animate"
          className="text-4xl ml-4 text-purple-600"
        >
          <FaHandSparkles />
        </motion.div>
      </div> */}

      <div className="flex items-center">
        <motion.h3
          variants={textVariants}
          initial="initial"
          animate="animate"
          //className="mt-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-4"
        //className="center text-extra-neon text-1xl lg:text-2xl"
          id="eitcn"
          className="center font-bold text-[0.55rem] md:text-2xl md:font-bpld "
        >
          Where IT minds get creative
        </motion.h3>
        <motion.div
          variants={starVariants}
          animate="animate"
          className=" ml-4  text-1xl md:text-2xl"
        >
          <FaStar />
        </motion.div>
      </div>
                    </motion.div>
                </div>
            </div>
            <div className="w-3/4 mx-auto lg:w-1/2 lg:p-8"> 
                <div className="flex justify-center ">
                    <motion.img variants={container2(1.2)} className="neon-image" initial="hidden" animate="visible" src={eitcLogo} alt=""/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Welcome
